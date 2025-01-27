export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('user', 2).forEach(user => {
    server.createList('routine', 2, { user }).forEach(routine => {
      server.createList('workout', 2, { routine }).forEach(workout => {
        server.createList('exercise', 5, { workout }).forEach(exercise => {
          server.create('exercise-summary', { exercises: [exercise] });

          // Hacky way to test self-referencing relationships using mirage.
          const workout = exercise.workout;
          exercise.update({
            superset: workout.exercises.filter(result => result.id !== exercise.id)
          });
        })
      })
    })
  });
}
