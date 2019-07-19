import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  maxWorkouts: 10,

  placeholdersNeeded: computed('model', function() {
    if (this.model && this.model.workouts.length < this.maxWorkouts) {
      return true;
    }

    return false;
  })
});
