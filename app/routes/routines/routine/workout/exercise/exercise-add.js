import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  setupController(controller) {
    this._super(...arguments);
    controller.send('enteredRoute');
  },

  model() {
    return this.store.createRecord('exercise');
  }
});
