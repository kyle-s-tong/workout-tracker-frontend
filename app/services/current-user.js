import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
      const userId = this.getUserId();
      if (userId) {
        return this.store.findRecord('user', userId).then((user) => {
          this.set('user', user);
        });
      } else {
      return RSVP.resolve();
      }
  },

  getUserId() {
    if (this.get('session.isAuthenticated')) {
      return this.session.data.authenticated.userId;
    }

    return null;
  }
});
