import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | workout-add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:workout-add');
    assert.ok(route);
  });
});
