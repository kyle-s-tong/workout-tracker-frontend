import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  session: inject(),
  showingMobileMenu: false,

  actions: {
    toggleMenu: function () {
      this.set('showingMobileMenu', !this.showingMobileMenu);
    }
  }
});
