import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),

  loadCurrentUser() {
    return this.currentUser.load().catch(() => this.session.invalidate());
  },

  beforeModel() {
    this._super(...arguments);
    this.loadCurrentUser()
      .then(user => {
        if (user.activeRoutine && !user.willChangeRoutine) {
          this.transitionTo('routines.routine', user.activeRoutine);
        }
      });
  },

  model() {
    let userId = this.currentUser.getUserId();
    return this.store.query('routine', {
      userId: userId,
      include: 'workouts'
    });
  }
});
