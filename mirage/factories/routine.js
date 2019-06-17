import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title(i) {
    return `${faker.lorem.word()} ${i}`
  }
});
