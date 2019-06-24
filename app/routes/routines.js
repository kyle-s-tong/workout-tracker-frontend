import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),

  _loadCurrentUser() {
    return this.currentUser.load().catch(() => this.session.invalidate());
  },

  beforeModel() {
    this._super(...arguments);
    return this._loadCurrentUser();
  },

  model() {
    let userId = this.get('currentUser.user.id');
    return this.store.query('routine', {
      userId: userId
    });
  }
});
