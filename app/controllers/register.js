import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  session: inject(),
  actions: {
    register() {
      const user = this.getProperties('firstName', 'lastName', 'email', 'password');
      const newUserRecord = this.store.createRecord('user', user);

      newUserRecord
        .save()
        .then(() => {
            get(this, 'session').authenticate('authenticator:custom', get(newUserRecord, 'email'), get(newUserRecord, 'password'))
              .catch((reason) => {
                set(this, 'errorMessage', reason.error || reason);
              })
            })
        .catch((reason) => {
          set(this, 'errorMessage', reason.error || reason);
        })
      }
    }
});
