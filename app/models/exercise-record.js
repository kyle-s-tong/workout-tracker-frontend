import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;
import { fragmentArray } from 'ember-data-model-fragments/attributes';

export default Model.extend({
  title: attr('string'),
  dateRecorded: attr('date'),
  cancelled: attr('boolean'),
  sets: fragmentArray('exercise-record-set'),

  exercise: belongsTo('exercise'),
  workoutRecord: belongsTo('workout-record')
});
