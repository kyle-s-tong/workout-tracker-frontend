import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Exercise ${i}`
  },

  numberOfSets() {
    return 3;
  },

  reps() {
    return 10;
  },

  rest() {
    return 5;
  },
});
