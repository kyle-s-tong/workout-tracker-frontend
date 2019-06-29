import { Factory } from 'ember-cli-mirage';


export default Factory.extend({
  title(i) {
    return `Routine ${i + 1}`
  },

  isActive(i) {
    if (i === 2) {
      return true;
    }

    return false;
  }
});
