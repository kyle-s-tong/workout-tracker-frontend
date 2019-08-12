import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exercises/exercise-edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:exercises/exercise-edit');
    assert.ok(route);
  });
});
