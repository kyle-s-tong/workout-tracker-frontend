import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin, {
  templateName: 'routine',

  model(params) {
    console.log('here');
    return this.store.find('routine', params.routine_id);
  }
});
