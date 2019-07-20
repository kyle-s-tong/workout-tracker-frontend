import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: 'routines',
  routeIfAlreadyAuthenticated: 'routines',
  currentUser: service(),

  beforeModel() {
    this.loadCurrentUser()
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  loadCurrentUser() {
    return this.currentUser.load().catch(() => this.session.invalidate());
  }
});
