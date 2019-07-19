import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | workouts/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:workouts/index');
    assert.ok(route);
  });
});
