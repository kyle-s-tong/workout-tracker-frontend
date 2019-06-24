import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: 'routines',
  routeIfAlreadyAuthenticated: 'routines',
  currentUser: service(),

  beforeModel() {
    this.replaceWith('routines');
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.currentUser.load().catch(() => this.session.invalidate());
  }
});
