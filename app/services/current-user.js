import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    const userId = this.getUserId();
    if (userId) {
      return this.store.findRecord('user', userId);
    } else {
      return RSVP.resolve();
    }
  },

  getUserId() {
    if (this.get('session.isAuthenticated')) {
      return this.session.data.authenticated.userId;
    }

    return null;
  },

  getActiveRoutine() {
    const userId = this.getUserId();

    if (userId) {
      const user = this.store.peekRecord('user', userId);
      return user.activeRoutine;
    }
  }
});
