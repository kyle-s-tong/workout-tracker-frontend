import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  maxRoutines: 5,

  placeholdersNeeded: computed('model', function() {
    if (this.model && this.model.length < this.maxRoutines) {
      return true;
    }

    return false;
  })
});
