import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      const userId = this.session.data.authenticated.userId;
      if (userId) {
        return this.store.findRecord('user', userId).then((user) => {
          this.set('user', user);
        });
      }
    } else {
      return RSVP.resolve();
    }
  }
});
