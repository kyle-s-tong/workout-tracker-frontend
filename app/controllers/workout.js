import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  maxExercises: 50,

  placeholdersNeeded: computed('model', function() {
    if (this.model && this.model.exercises.length < this.maxExercises) {
      return true;
    }

    return false;
  })
});
