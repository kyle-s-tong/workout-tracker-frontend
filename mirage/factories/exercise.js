import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  sets(i) {
    return 3;
  },

  reps(i) {
    return 10;
  },

  rest(i) {
    return 60;
  },

  isSuperset(i) {
    return false;
  },
});
