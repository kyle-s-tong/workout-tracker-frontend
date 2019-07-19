import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),

  actions: {
    save(model) {
      this.store.findRecord('user', this.currentUser.getUserId())
        .then((user) => {
          model.set('user', user);
          model.save()
            .then((routine) => {
              this.transitionToRoute('routine', routine.id)
            })
        })
    }
  }
});
