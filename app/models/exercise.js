import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  sets: attr('number'),
  reps: attr('number'),
  rest: attr('number'),
  isSuperset: attr('boolean'),
  exerciseSummary: belongsTo('exercise-summary'),
  workouts: hasMany('workout')
});
