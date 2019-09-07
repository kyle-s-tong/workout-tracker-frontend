import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),

  model: function() {
    let userId = this.get('currentUser.user.id');
    return this.store.query('routine', {
      userId: userId
    });
  }
});
