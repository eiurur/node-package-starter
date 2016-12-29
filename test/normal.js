const assert = require('assert');
const { Calc } = require('../build/index');

describe('normal', () => {
  it('1 + 1 === 2', () => {
    assert(Calc.add(1, 1) === 2);
  });
});
