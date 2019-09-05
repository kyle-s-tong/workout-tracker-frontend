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

  this.post('/security/login', () => {
    return {
      "authenticated": true,
      "token": "65319d545c6757b0efa1a6a3470ba53d",
      "userId": 2
    }
  });

  this.get('/api/users');
  this.get('/api/users/:id');
  this.patch('/api/users/:id');

  this.get('/api/workouts');
  this.post('/api/workouts');
  this.get('/api/workouts/:id');
  this.patch('/api/workouts/:id');
  this.delete('/api/workouts/:id');

  this.get('/api/workout-records');
  this.post('/api/workout-records');
  this.patch('/api/workout-records/:id');
  this.get('/api/workout-records/:id');
  this.delete('/api/workout-records/:id');

  this.get('/api/exercise-records');
  this.post('/api/exercise-records');
  this.patch('/api/exercise-records/:id');
  this.get('/api/exercise-records/:id');
  this.delete('/api/exercise-records/:id');

  this.get('/api/exercise-summaries');
  this.get('/api/exercise-summaries/:id');

  this.patch('/api/exercises/:id');
  this.get('/api/exercises/:id');
  this.delete('/api/exercises/:id');
  this.get('/api/exercises');
  this.post('/api/exercises');



  this.post('/api/routines', function(schema) {
    let attrs = this.normalizedRequestAttrs();


    if (attrs.isActive && attrs.isActive === true) {
      schema.routines.where({ isActive: true }).update({ isActive: false })
    }

    return schema.routines.create(attrs);
  });

  this.get('/api/routines', (schema, request) => {
    const user = request.queryParams.userId;

    if (user) {
      return schema.routines.where({ userId: user })
    }

    return schema.routines.all();
  });
  this.get('/api/routines/:id');

  this.passthrough();
}
