import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  sets() {
    return 3;
  },

  reps() {
    return 10;
  },

  rest() {
    return 60;
  },

  isSuperset() {
    return false;
  },
});
