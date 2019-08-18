import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | routines/routine/routine-delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:routines/routine/routine-delete');
    assert.ok(route);
  });
});
