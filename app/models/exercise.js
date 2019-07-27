import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  sets: attr(),
  reps: attr(),
  rest: attr(),
  isSuperset: attr('boolean'),
  exerciseSummary: belongsTo('exercise-summary'),
  exerciseRecords: hasMany('exercise-record'),
  workouts: hasMany('workout')
});
