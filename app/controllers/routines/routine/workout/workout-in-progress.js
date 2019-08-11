import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';

export default Controller.extend({
  exerciseRecords: null,
  isShowingModal: false,
  restTime: null,

  currentSupersetStartIndex: null,
  currentExerciseRecordIndex: 0,
  currentExerciseRecordObserver: observer('currentExerciseRecordIndex', function () {
    this.set('currentExerciseRecord', this.exerciseRecords[this.currentExerciseRecordIndex]);
  }),
  currentExerciseRecord: null,

  swiperOptions: computed('swiper', function() {
    return {
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-previous'
      }
    }
  }),

  createExerciseRecords: async function () {
    const exercises = await this.model.workout.get('exercises');

    let exerciseRecords = [];

    await Promise.all(exercises.map(async (exercise) => {
      const summary = await exercise.exerciseSummary;

      //Create a record for each exercise
      //TODO: Get the last value if there's already an exercise record to put in the previous values.
      const record = this.store.createRecord('exercise-record', {
        title: summary.title,
        dateRecorded: this.model.dateRecorded,
        cancelled: false,
        isComplete: false,
        exercise: exercise,
        workoutRecord: this.model,
        sets: [],
      })

      let setsWithDetails = [];
      for (let i = 0; i < exercise.numberOfSets; i++) {
        setsWithDetails.push({
          reps: exercise.reps,
          weight: 0,
          rest: exercise.rest,
          isComplete: false
        })
      }

      record.set('sets', setsWithDetails);

      try {
        await record.save();
      } catch (error) {
        throw new Error(error);
      }

      exerciseRecords.push(record);
    }));

    return exerciseRecords;
  },

  countDownRest: function (time) {
    let timeLeft = time;
    this.toggleProperty('isShowingModal');

    var downloadTimer = setInterval(() => {
      timeLeft -= 1;
      this.set('restTime', timeLeft);

      if (timeLeft <= 0) {
        clearInterval(downloadTimer);
        this.toggleProperty('isShowingModal');
      }
    }, 1000);
  },

  updateRecordsOnRest: async function (records, showRestModal = true) {
    //Coerce into array to make use of below function.
    if (!(records instanceof Array)) {
      records = [records];
    }

    await Promise.all(records.map(async (record) => {
      if (showRestModal) {
        if (record.changedAttributes().sets) {
          this.set('restTime', record.changedAttributes().sets.lastObject.rest);
        } else {
          this.set('restTime', record.get('sets').firstObject.rest);
        }
        this.countDownRest(this.get('restTime'));
      }

      try {
        await record.save();
      } catch (error) {
        throw new Error(error);
      }
      })
    )
  },

  isSuperSetWithNextRecord: async function(record) {
    const exercise = await record.exercise;

    const nextRecordIndex = this.get('currentExerciseRecordIndex') + 1;
    const nextRecord = this.get('exerciseRecords')[nextRecordIndex];

    if (nextRecord) {
      const nextExerciseSuperset = await nextRecord.exercise.get('superset');

      return nextExerciseSuperset.includes(exercise);
    }

    return false;
  },

  isSuperSetWithPreviousRecord: async function(record) {
    const exercise = await record.exercise;

    if (this.get('currentExerciseRecordIndex') !== 0) {
      const previousRecordIndex = this.get('currentExerciseRecordIndex') - 1;
      const previousRecord = this.get('exerciseRecords')[previousRecordIndex];
      if (previousRecord) {
        const previousExerciseSuperset = await previousRecord.exercise.get('superset');

        return previousExerciseSuperset.includes(exercise);
      }
    }

    return false;
  },

  updateCurrentRecordIndex: function(record = null, index = null, direction = 'up') {

    if (record !== null && index !== null) {
      this.set('currentExerciseRecordIndex', index);
    } else {
      let counter = 1;
      if (direction === 'down' && this.get('currentExerciseRecordIndex') !== 0) {
        counter = -1;
      }

      const nextRecordIndex = this.get('currentExerciseRecordIndex') + counter;

      this.set('currentExerciseRecordIndex', nextRecordIndex);
    }
  },

  actions: {
    enteredRoute: async function () {
      const exerciseRecords = await this.createExerciseRecords();

      this.set('exerciseRecords', exerciseRecords);
      this.set('currentExerciseRecordIndex', 0)
    },
    cancel: function () {
      const exerciseRecords = this.get('exerciseRecords');
      exerciseRecords.forEach(record => {
        record.destroyRecord();
      })

      this.model.destroyRecord();

      this.transitionToRoute('routines.routine.workout', this.model.workout);
    },
    finishWorkout: function () {
      const records = this.get('exerciseRecords');

      records.forEach(record => {
        if (record.get('hasDirtyAttributes')) {
          record.save();
        }
      })
    },
    rest: async function() {
      let recordsToUpdate = this.get('exerciseRecords').filter(record => record.get('hasDirtyAttributes'));

      if (!recordsToUpdate || recordsToUpdate.length === 0) {
        recordsToUpdate = [this.get('currentExerciseRecord')];
      }

      const record = recordsToUpdate.lastObject;
      const superSetWithNextRecord = await this.isSuperSetWithNextRecord(record);
      const superSetWithPreviousRecord = await this.isSuperSetWithPreviousRecord(record);

      if (superSetWithNextRecord) {
        const currentRecordIndex = this.get('currentExerciseRecordIndex');

        if (!superSetWithPreviousRecord) {
          this.set('currentSupersetStartIndex', currentRecordIndex);
        }

        // Save and move straight to the next exercise
        await this.updateRecordsOnRest(recordsToUpdate, false);
        this.updateCurrentRecordIndex();
      } else if (superSetWithPreviousRecord) {
        await this.updateRecordsOnRest(recordsToUpdate, true);

        //If the last set in a superset, go back to the beginning of the superset to start again
        const currentSupersetStartIndex = this.get('currentSupersetStartIndex');

        this.set('currentExerciseRecordIndex', currentSupersetStartIndex);
      } else {
        await this.updateRecordsOnRest(recordsToUpdate, true);
      }
    },
    next: function() {
      this.updateCurrentRecordIndex();
    },
    previous: function() {
      this.updateCurrentRecordIndex(null, null, 'down')
    }
  }
});
