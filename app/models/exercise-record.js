import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  weight: attr(),
  reps: attr(),

  exercise: belongsTo('exercise'),
  workoutRecord: belongsTo('workout-record')
});
