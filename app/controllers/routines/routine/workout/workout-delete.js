import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    delete: async function() {
      const routine = await this.model.workout;

      this.model.destroyRecord()
        .then(() => {
          this.transitionToRoute('routines.routine', routine.id)
     })
    }
  }
});
