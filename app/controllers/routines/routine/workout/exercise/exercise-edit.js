import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
  supersetExercises: null,

  actions: {
    save: function(model) {
      model.save()
        .then(async (exercise) => {
          const workout = await exercise.workout;
          const routine = await workout.routine;
          this.transitionToRoute('routines.routine.workout', routine.id, workout.id)
      })
    },
    enteredRoute: function() {
      this.formatSupersetExercises();
    }
  },

  formatSupersetExercises: async function() {
    const superset = await this.model.superset;
    let supersetsForForm = [];

    if (superset) {
      superset.forEach(exercise => {
        supersetsForForm.push(exercise);
      })
    }

    this.set('supersetExercises', supersetsForForm);
  }
});
