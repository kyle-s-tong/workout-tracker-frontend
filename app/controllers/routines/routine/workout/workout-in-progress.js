import Controller from '@ember/controller';

export default Controller.extend({
  exerciseRecords: null,

  swiperOptions: {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-previous'
    }
  },

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

      exerciseRecords.push(record);
    }));

    this.set('exerciseRecords', exerciseRecords);
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
    },
    next() {

    },
  }
});
