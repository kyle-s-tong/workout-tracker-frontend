import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import exerciseSummary from '../../models/exercise-summary';


export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('exercise-summary', params.exercise_id);
  }
});
