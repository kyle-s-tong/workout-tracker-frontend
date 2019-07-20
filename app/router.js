import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');

  this.route('routines', { path: 'routines'}, function() {
    this.route('routine', { path: ':id'}, function() {
      this.route('workout', { path: 'workouts/:workout_id'});
      this.route('workout-add', { path: 'workouts/add' })
    })
    this.route('create');
  });

  this.route('exercise', { path: 'exercises/:exercise_id'});
  this.route('workout-add');
});

export default Router;
