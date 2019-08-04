import DS from 'ember-data';
const { attr } = DS;
import Fragment from 'ember-data-model-fragments/fragment';

export default Fragment.extend({
  reps: attr('number'),
  weight: attr('number'),
  rest: attr('number')
});
