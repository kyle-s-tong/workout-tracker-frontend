import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(...arguments);
    controller.send('enteredRoute', model);
  },

  model() {
    const workout = this.modelFor('routines.routine.workout');
    console.log(workout);

    const record = this.store.createRecord('workout-record', {
      workout: workout
    });

    return record;
  }
});
