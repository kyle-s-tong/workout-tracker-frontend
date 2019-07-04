import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('workouts');
  this.route('login');
  this.route('register');
  this.route('routines');
  this.route('routine', { path: 'routines/:routine_id'});
  this.route('workout', { path: 'workouts/:workout_id'});
  this.route('exercise', { path: 'exercises/:exercise_id'});
});

export default Router;
