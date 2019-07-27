import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  maxExercises: 50,
  buttonText: "Start workout",

  placeholdersNeeded: computed('model', function() {
    if (this.model && this.model.exercises.length < this.maxExercises) {
      return true;
    }

    return false;
  }),

  actions: {
    startWorkout(workout) {
      const record = this.store.createRecord('workout-record', {
        workout: workout
      })
      record.save()
        .then(record => {
          this.transitionToRoute('routines.routine.workout.workout-in-progress', record);
        })
    }
  }
});
