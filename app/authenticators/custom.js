import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';
import config from '../config/environment';
import RSVP from 'rsvp';

export default BaseAuthenticator.extend({
  restore(data) {
    return new RSVP.Promise(function(resolve, reject) {
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

      return fetch(`http://localhost:8000/api/security/login`, options).then(function(response){
        return response.json();
      }).then(data => { 
          return resolve(data);
          
      }).catch(function(reason) {
        return reject(reason);
      });
    });
  },

  invalidate(data) {
    return RSVP.Promise.resolve();
  }
});