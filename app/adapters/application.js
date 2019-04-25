import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:8000',
    namespace: 'api',
    headers: computed(function () {
        return {
            'x-authentication': 'e13a991963cca255ec5b297e28e8d051'
        }
    })
});
