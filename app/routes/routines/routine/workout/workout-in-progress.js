import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.send('enteredRoute');
  },

  model() {
    const workout = this.modelFor('routines.routine.workout');

    const record = this.store.createRecord('workout-record', {
      workout: workout,
      dateRecorded: new Date(),
      cancelled: false
    });

    record.save();

    return record;
  }
});
