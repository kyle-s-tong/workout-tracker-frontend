import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),

  actions: {
    async save(model) {
      const user = await this.store.findRecord('user', this.currentUser.getUserId())

      model.set('user', user);

      const workout = await model.save();
      this.transitionToRoute('routines.routine.workout', workout.id);
    }
  }
});
