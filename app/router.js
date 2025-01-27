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
      this.route('workout', { path: 'workouts/:workout_id' }, function() {
        this.route('exercise', function() {
          this.route('exercise-add', { path: 'add' });
          this.route('exercise-edit', { path: ':exercise_id/edit' });
          this.route('exercise-delete', { path: 'delete' });
        });
        this.route('workout-in-progress', { path: 'record-workout' });
        this.route('workout-edit', { path: '/edit' });
        this.route('workout-delete', { path: '/delete' });
      });
      this.route('workout-add', { path: 'workouts/add' })
      this.route('routine-delete', { path: '/delete' });
      this.route('routine-edit', { path: '/edit' });
    })
    this.route('routine-add', { path: 'add' });
  });

  this.route('exercise-summaries', { path: 'exercises' }, function () {
    this.route('exercise-summary', { path: ':exercise_summary_id' });
  })


});

export default Router;
