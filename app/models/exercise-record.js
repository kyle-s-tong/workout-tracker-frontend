import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  dateRecorded: attr('date'),
  cancelled: attr('boolean'),
  weight: attr(),
  reps: attr(),
  sets: attr(),

  exercise: belongsTo('exercise'),
  workoutRecord: belongsTo('workout-record')
});
