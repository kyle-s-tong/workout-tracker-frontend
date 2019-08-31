import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  title: attr(),
  numberOfSets: attr(),
  reps: attr(),
  rest: attr(),
  superset: hasMany('exercise', { inverse: 'superset' }),
  exerciseSummary: belongsTo('exercise-summary'),
  exerciseRecords: hasMany('exercise-record'),
  workout: belongsTo('workout')
});
