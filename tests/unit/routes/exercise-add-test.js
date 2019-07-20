import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exercise-add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:exercise-add');
    assert.ok(route);
  });
});
