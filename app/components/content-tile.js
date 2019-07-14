import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  linkRouteCreate: computed('linkRoute', function() {
    return `${this.linkRoute}.create`;
  })
});
