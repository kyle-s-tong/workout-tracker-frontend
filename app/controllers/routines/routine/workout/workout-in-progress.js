import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';

export default Controller.extend({
  exerciseWithSets: computed('model', function() {
    return this.getExercisesWithSets();
  }),

  getExercisesWithSets: task(function * () {
    const exercises = yield this.model.workout.exercises;

    let exercisesWithSets = [];

    for (let i = 0; i < exercises.length; i++) {
      const summary = yield exercises[i].exerciseSummary;

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
    }

    console.log(exerciseWithSets);
    return exercisesWithSets;
  }),

  actions: {
    cancel() {

    },
    finishWorkout() {

    }
  }
});
