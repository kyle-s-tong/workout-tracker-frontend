import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  numberOfSets() {
    return 3;
  },

  reps() {
    return 10;
  },

  rest() {
    return 60;
  },
});
