import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  workouts: hasMany('workout'),
  routine: belongsTo('routine')
});
