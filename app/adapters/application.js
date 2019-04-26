import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend({
    session: service(), 
    host: 'http://localhost:8000',
    namespace: 'api',
    headers: computed('session.data.authenticated.token', function () {
        return {
            'x-authentication': this.session.data.authenticated.token
        }
    })
});
