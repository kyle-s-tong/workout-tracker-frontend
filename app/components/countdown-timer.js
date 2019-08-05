import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  formattedRestTime: computed('restTime', function() {
    return `00:${this.restTime}`
  })
});
