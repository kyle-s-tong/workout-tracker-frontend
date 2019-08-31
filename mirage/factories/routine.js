import { Factory } from 'ember-cli-mirage';


export default Factory.extend({
  name(i) {
    return `Routine ${i + 1}`
  },

  isActive(i) {
    if (i === 2) {
      return true;
    }

    return false;
  }
});
