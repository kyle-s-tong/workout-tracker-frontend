import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  currentUser: inject(),
  store: inject(),
  classNameBindings: ['isHidden:hidden:inner'],

  userFirstName: computed('currentUser', function () {
    return this.currentUser.getUserName();
  }),
  isHidden: computed('isShowing', function () {
    return !this.get('isShowing');
  }),

  actions: {
    logout: function() {
      this.currentUser.logout();
    },
  }
});
