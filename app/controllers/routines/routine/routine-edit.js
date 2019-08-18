import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save: function(model) {
      model.save()
        .then(async () => {
          this.transitionToRoute('routines')
      })
    }
  }
});
