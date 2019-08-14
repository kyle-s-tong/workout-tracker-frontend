import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  exercises: hasMany('exercise'),
  routine: belongsTo('routine'),
  user: belongsTo('user')
});
