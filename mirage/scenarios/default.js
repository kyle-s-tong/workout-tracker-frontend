export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('user', 2).forEach(user => {
    server.createList('routine', 2, { user }).forEach(routine => {
      server.createList('workout', 2, { routines: [routine] }).forEach(workout => {
        server.createList('exercise', 2, { workouts: [workout] })
      })
    })
  });
}
