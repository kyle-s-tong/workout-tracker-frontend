import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  password: attr('string'),
  activeRoutine: attr('number'),
  // // TODO: Make this do something
  // willChangeRoutine: attr('boolean'),

  routines: hasMany('routines'),
  workouts: hasMany('workouts')
});
