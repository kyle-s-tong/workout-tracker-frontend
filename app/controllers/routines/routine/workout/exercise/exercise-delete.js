import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    delete: async function() {
      const workout = await this.model.workout;
      const routine = await workout.routine;

      this.model.destroyRecord()
        .then(() => {
          this.transitionToRoute('routines.routine.workout', routine.id, workout.id)
     })
    }
  }
});
