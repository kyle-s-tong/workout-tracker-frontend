import { Factory } from 'ember-cli-mirage';
import { lorem } from 'faker';

export default Factory.extend({
  title(i) {
    return `${lorem.word()} ${i}`
  }
});
