import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';
import ENV from '../config/environment';
import RSVP from 'rsvp';

export default BaseAuthenticator.extend({
  restore(data) {
    return new RSVP.Promise(function(resolve, reject) {
      if (!data.token) {
        return reject();
      }
      return resolve(data);
    });
  },

  authenticate(identification, password) {
    return new RSVP.Promise(function(resolve, reject) {
      const headers = {
        'Content-Type' : 'application/json',
      };

      const bodyData = {
        "email": identification,
        "password": password
      };
      const body = JSON.stringify(bodyData);

      const options = {
        body,
        headers,
        method: 'POST'
      };

      return fetch(`${ENV.API_HOST}/security/login`, options).then(function(response){
        return response.json();
      }).then(data => {
          return resolve(data);

      }).catch(function(reason) {
        return reject(reason);
      });
    });
  },

  // invalidate(data) {
  //   //@TODO: Create invalidation endpoint on server side to explicit expire a session token and put logic here.
  //   let token = data.token;
  //   return RSVP.Promise.resolve();
  // }
});
