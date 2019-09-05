import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),

  async model() {
    const user = await this.currentUser.load();
    return this.store.createRecord('routine', { user });
  }
});
