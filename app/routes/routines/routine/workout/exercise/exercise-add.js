import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const workout = this.modelFor('routines.routine.workout');
    return this.store.createRecord('exercise', {
      workout
    });
  }
});
