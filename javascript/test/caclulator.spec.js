const expect = require('chai').expect;
const {add} = require('../src/calculator');

describe('CalculatorTests', () => {
    it('should return zero when given an empty string', () => {
        expect(add('')).to.eql(0)
    });

    it('should add return number when given only one', () => {
       expect(add('1')).to.eql(1);
    });

    it('should return sum when given comma separated string', () => {
       expect(add('1,2,3,4,5')).to.eql(15);
    });
});