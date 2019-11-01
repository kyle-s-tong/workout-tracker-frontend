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
    async startWorkout() {
      const workoutRecords = await this.store.query('workout-record', {
        filter: {
          'workout.id': this.model.id
        }
      });
      console.log(workoutRecords);
      this.transitionToRoute('routines.routine.workout.workout-in-progress');
    }
  }
});
