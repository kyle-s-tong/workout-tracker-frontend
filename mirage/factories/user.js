import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  firstName(i) {
    return `Mr ${i + 1}`
  },

  lastName(i) {
    return `User ${i + 1}`
  },

  email(i) {
    return `hi${i + 1}@gmail.com`
  },

  activeRoutine(i) {
    return 3
  },
});
