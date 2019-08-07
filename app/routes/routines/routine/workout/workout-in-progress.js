import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.send('enteredRoute');
  },

  async model() {
    const workout = this.modelFor('routines.routine.workout');

    const record = this.store.createRecord('workout-record', {
      workout: workout,
      dateRecorded: new Date(),
      cancelled: false
    });

    await record.save();

    return record;
  }
});
