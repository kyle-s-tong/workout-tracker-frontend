import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  session: inject(),
  showingMobileMenu: false,

  actions: {
    logout: function() {
      this.get('session').invalidate();
    },
    toggleMenu: function () {
      this.set('showingMobileMenu', !this.showingMobileMenu);
    }
  }
});
