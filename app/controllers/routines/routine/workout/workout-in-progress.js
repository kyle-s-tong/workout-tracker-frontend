import Controller from '@ember/controller';

export default Controller.extend({
  exercisesWithSets: null,

  getExercisesWithSets: async function () {
    const exercises = this.get('model.workout.exercises');

    let exercisesWithSets = [];

    await Promise.all(exercises.map(async (exercise) => {
      const summary = await exercise.exerciseSummary;

      let exerciseWithSets = {
        title: summary.title,
        sets: []
      };

      for (let i = 0; i < exercise.sets; i++) {
        exerciseWithSets.sets.push({
          reps: exercise.reps,
          weight: 0,
          rest: exercise.rest
        })

      }
      exercisesWithSets.push(exerciseWithSets);
    }));

    this.set('exercisesWithSets', exercisesWithSets)
  },

  actions: {
    enteredRoute() {
      this.getExercisesWithSets();
    },
    cancel() {

    },
    finishWorkout() {

    },
    rest() {

    },
    next() {

    },
  }
});
