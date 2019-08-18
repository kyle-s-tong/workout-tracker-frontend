import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | routines/routine/workout/exercise/exercise-delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:routines/routine/workout/exercise/exercise-delete');
    assert.ok(route);
  });
});
