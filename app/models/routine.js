import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  isActive: attr('boolean'),
  workouts: hasMany('workout'),
  user: belongsTo('user')
});
