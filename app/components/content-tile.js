import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  contentTitle: computed('content', function() {
    if (this.content.title) {
      return this.content.title;
    } else if (this.content.name) {
      return this.content.name;
    } else {
      return null;
    }
  })
});
