import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  hasOneButton: computed('buttonNumber', function() {
    return this.buttonNumber === 1;
  })
});
