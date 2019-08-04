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

  this.get('/users');
  this.get('/users/:id');
  this.patch('/users/:id');

  this.get('/workouts');
  this.post('/workouts');
  this.get('/workouts/:id');

  this.get('/workout-records');
  this.post('/workout-records');
  this.patch('/workout-records/:id');
  this.get('/workout-records/:id');

  this.get('/exercise-records');
  this.post('/exercise-records');
  this.patch('/excercise-records/:id');
  this.get('/excercise-records/:id');

  this.get('/exercise-summaries');
  this.get('/exercise-summaries/:id');

  this.post('/routines', function(schema) {
    let attrs = this.normalizedRequestAttrs();


    if (attrs.isActive && attrs.isActive === true) {
      schema.routines.where({ isActive: true }).update({ isActive: false })
    }

    return schema.routines.create(attrs);
  });

  this.get('/routines', (schema, request) => {
    const user = request.queryParams.userId;

    if (user) {
      return schema.routines.where({ userId: user })
    }

    return schema.routines.all();
  });
  this.get('/routines/:id');

  this.get('/exercises');
  this.get('/exercises/:id');

}
