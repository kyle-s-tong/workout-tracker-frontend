import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  dateRecorded: attr('date'),
  cancelled: attr('boolean'),

  workout: belongsTo('workout'),
  exerciseRecords: hasMany('exercise-record')
});
