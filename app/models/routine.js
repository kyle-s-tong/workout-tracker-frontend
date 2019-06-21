import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  title: attr('string'),
  exercises: hasMany('workout'),
  user: belongsTo('user')

});
