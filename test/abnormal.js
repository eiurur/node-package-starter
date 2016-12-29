const assert = require('assert');
const { Calc } = require('../build/index');

describe('abnormal', () => {
  it('1 + 1 !== 3', () => {
    assert(Calc.add(1, 1) !== 3);
  });
});
