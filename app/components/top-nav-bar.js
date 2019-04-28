import Component from '@ember/component';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({
  session: inject(),
  actions: {
    logout() {
      get(this, 'session').invalidate();
    }
  }
});
