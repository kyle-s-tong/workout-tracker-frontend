import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
    session: inject(),

    actions: {
        logout() {
            get(this, 'session').invalidate();
        }
    }
});
