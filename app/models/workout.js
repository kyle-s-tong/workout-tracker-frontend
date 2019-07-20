import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  exercises: hasMany('exercise'),
  routines: hasMany('routine'),
  user: belongsTo('user')
});
