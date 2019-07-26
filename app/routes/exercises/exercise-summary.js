import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('exercise-summary', params.exercise_summary_id);
  }
});
