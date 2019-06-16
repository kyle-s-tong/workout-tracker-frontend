export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.urlPrefix = 'http://localhost:8000';

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.post('/users/login', () => {
    return {
      "authenticated": true,
      "token": "65319d545c6757b0efa1a6a3470ba53d",
      "userId": 2
    }
  });

  this.get('/workouts');

  this.get('/routines');
}
