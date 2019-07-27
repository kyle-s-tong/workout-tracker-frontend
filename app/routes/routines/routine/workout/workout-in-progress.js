import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const record = this.store.createRecord('workout-record',
      {
        workout: this.store.findRecord('workout', params.current_workout_id)
      }
    )
    record.save()
      .then(record => {
        return record;
      })
  }
});
