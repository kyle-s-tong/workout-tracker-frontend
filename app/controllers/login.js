import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
    session: inject(),

    actions: {
        authenticate() {
            let { identification, password } = 
            this.getProperties('identification', 'password');

            get(this, 'session').authenticate('authenticator:custom',
            identification, password).catch((reason) => {
                set(this, 'errorMessage', reason.error);
            });
        }
    }
});
