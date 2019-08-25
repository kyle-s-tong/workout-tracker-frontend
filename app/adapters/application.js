import DS from 'ember-data';
import ENV from '../config/environment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
    session: service(),
    host: ENV.API_HOSTNAME,
    namespace: ENV.API_NAMESPACE,
    headers: computed('session.data.authenticated.token', function () {
        const headers = {};
        if (this.session.isAuthenticated) {
          headers['x-authentication'] = `${this.session.data.authenticated.token}`;
        }

        return headers;
    }),
});
