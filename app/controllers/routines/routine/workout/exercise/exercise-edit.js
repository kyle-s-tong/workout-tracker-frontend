import Controller from '@ember/controller';


export default Controller.extend({
  actions: {
    save: function(model) {
      model.save()
        .then(async (exercise) => {
          const workout = await exercise.workout;
          this.transitionToRoute('routines.routine.workout', workout.id)
      })
    }
  }
});
