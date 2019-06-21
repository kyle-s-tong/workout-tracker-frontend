import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),

  _loadCurrentUser() {
    return this.currentUser.load().catch(() => this.session.invalidate());
  },

  beforeModel() {
    return this._loadCurrentUser();
  },

  model() {
    let userId = this.get('currentUser.user.id');
    return this.store.query('routine', {
      userId: userId
    });
  }
});
