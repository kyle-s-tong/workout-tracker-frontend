import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  currentUser: inject(),
  classNameBindings: ['isHidden:hidden:inner'],

  isHidden: computed('isShowing', function () {
    return !this.get('isShowing');
  })
});
