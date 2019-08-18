import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save: function(model) {
      model.save()
        .then(async (workout) => {
          const routine = await workout.routine;
          this.transitionToRoute('routines.routine', routine.id)
      })
    }
  }
});
