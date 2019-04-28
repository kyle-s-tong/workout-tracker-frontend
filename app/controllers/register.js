import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  session: inject(),
  actions: {
    register() {
      let user = this.getProperties('firstName', 'lastName', 'email', 'password');
      let newUserRecord = this.store.createRecord('user', user);

      newUserRecord
        .save()
        .then((data) => {
            console.log(data);
            this.get('session').authenticate('authenticator:custom', newUserRecord.get('email'), newUserRecord.get('password'))
              .catch((reason) => {
                this.set('errorMessage', reason.error ||reason);
              })
            })
        .catch((reason) => {
          console.log(reason);
        })
      }
    }
});
