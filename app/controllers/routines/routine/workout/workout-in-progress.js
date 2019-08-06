import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  exerciseRecords: null,
  isShowingModal: false,
  restTime: null,

  swiperOptions: computed('swiper', function() {
    return {
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-previous'
      }
    }
  }),

  createExerciseRecords: async function () {
    const exercises = this.get('model.workout.exercises');

    let exerciseRecords = [];

    await Promise.all(exercises.map(async (exercise) => {
      const summary = await exercise.exerciseSummary;

      //Create a record for each exercise
      //TODO: Get the last value if there's already an exercise record to put in the previous values.
      const record = this.store.createRecord('exercise-record', {
        title: summary.title,
        dateRecorded: this.model.dateRecorded,
        cancelled: false,
        exercise: exercise,
        workoutRecord: this.model,
        sets: []
      })

      let setsWithDetails = [];

      for (let i = 0; i < exercise.numberOfSets; i++) {
        setsWithDetails.push({
          reps: exercise.reps,
          weight: 0,
          rest: exercise.rest
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

    this.set('exerciseRecords', exerciseRecords);
  },

  countDownRest(time) {
    let timeLeft = time;

    var downloadTimer = setInterval(() => {
      timeLeft -= 1;
      this.set('restTime', timeLeft);

      if (timeLeft <= 0) {
        clearInterval(downloadTimer);
        this.toggleProperty('isShowingModal');
      }
    }, 1000);
  },

  actions: {
    enteredRoute() {
      this.createExerciseRecords();
    },
    cancel() {

    },
    finishWorkout() {
      const records = this.get('exerciseRecords');

      records.forEach(record => {
        if (record.get('hasDirtyAttributes')) {
          record.save();
        }
      })
    },
    rest() {
      const records = this.get('exerciseRecords');

      records.forEach(async (record) => {
        if (record.get('hasDirtyAttributes')) {
          this.set('restTime', record.get('sets').firstObject.rest);
          this.countDownRest(this.get('restTime'));

          try {
            await record.save();
          } catch (error) {
            throw new Error(error);
          }
        }
      })
      this.toggleProperty('isShowingModal');
    },
    next() {

    },
  }
});
