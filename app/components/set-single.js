import Component from '@ember/component';

export default Component.extend({
  actions: {
    formChanged(change) {
      console.log('changed', change);
    }
  }
});
