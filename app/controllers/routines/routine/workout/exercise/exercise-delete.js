import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    delete: async function() {
      const workout = await this.model.workout;

      this.model.destroyRecord()
        .then(() => {
          this.transitionToRoute('routines.routine.workout', workout.id)
     })
    }
  }
});
