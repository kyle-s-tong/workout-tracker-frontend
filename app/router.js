import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');

  this.route('routines', function() {
    this.route('routine', { path: ':routine_id' }, function() {
      this.route('workout', { path: 'workouts/:workout_id' });
      this.route('workout-add', { path: 'workouts/add' })
    })
    this.route('routine-add', { path: 'add' });
  });

  this.route('exercises', function() {
    this.route('exercise', { path: ':exercise_id' });
    this.route('exercise-add', { path: 'add' });
  });
});

export default Router;
