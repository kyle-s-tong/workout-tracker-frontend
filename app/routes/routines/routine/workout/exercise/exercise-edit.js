import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  setupController(controller) {
    this._super(...arguments);
    controller.send('enteredRoute');
  },

  model(params) {
    return this.store.find('exercise', params.exercise_id);
  }
});
