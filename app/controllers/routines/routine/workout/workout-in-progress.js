import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';

export default Controller.extend({
  exercisesWithSets: null,

  getExercisesWithSets: task(function * (model) {
    const exercises = yield model.workout.exercises;
    console.log(exercises.length);

    let exercisesWithSets = [];

    for (let i = 0; i < exercises.length; i++) {
      const summary = yield exercises[i].exerciseSummary;
      console.log(summary);

      let exerciseWithSets = {
        title: summary.title,
        sets: []
      };

      for (let i = 0; i < exercises[i].sets; i++) {
        exerciseWithSets.sets.push({
          reps: exercises[i].reps,
          weight: 0,
          rest: exercises[i].rest
        })

      }
      exercisesWithSets.push(exerciseWithSets);
    }

    console.log(exercisesWithSets);
    this.set('exercisesWithSets', exercisesWithSets)
  }),

  actions: {
    enteredRoute(model) {
      this.getExercisesWithSets.perform(model);
    },
    cancel() {

    },
    finishWorkout() {

    }
  }
});
