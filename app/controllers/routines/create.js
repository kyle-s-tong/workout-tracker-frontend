import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save(model) {
      return model.save().then(function() {
        this.transitionToRoute('routines');
      });
    }
  }
});
