const expect = require('chai').expect;
const {add} = require('../src/calculator');

describe('CalculatorTests', () => {
    it('should return zero when given an empty string', () => {
        assertAdd('', 0);
    });

    it('should add return number when given only one', () => {
        assertAdd('1', 1);
    });

    it('should return sum when given comma delimiter', () => {
        assertAdd('1,2,3,4,5', 15);
    });

    it('should return sum when given a new line delimiter in string', () => {
       assertAdd('1\\n2\\n3\\n4\\n5', 15);
    });

    it('should return sum when given new line and comma delimiter', () => {
        assertAdd('1\\n2\\n3\\n4,5', 15);
    });

    it('should exclude numbers greater than one thousand', () => {
       assertAdd('1,2,1001', 3);
    });

    it('should throw an exception when provided with negative numbers', () => {
        assertAdd('-1,2,3,4,-5', 'Negatives not allowed: [-1,-5]')
    });

    function assertAdd(arguments, expected) {
        return expect(add(arguments)).to.eql(expected)
    }
});