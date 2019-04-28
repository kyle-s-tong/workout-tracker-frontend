import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
    session: inject(),
    actions: {
      login() {
        let { email, password } = this.getProperties('email', 'password');

        get(this, 'session').authenticate('authenticator:custom', email, password)
          .catch((reason) => {
            set(this, 'errorMessage', reason.error);
          });
      }
    }
});
