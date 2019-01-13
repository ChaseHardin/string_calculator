const expect = require('chai').expect;
const {add} = require('../src/calculator');

describe('CalculatorTests', () => {
    it('should return zero when given an empty string', () => {
        expect(add('')).to.eql(0)
    });
});