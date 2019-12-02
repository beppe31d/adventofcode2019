import { Day1 } from './Day1';
import { assert } from 'chai';
import 'mocha';

const day1 = new Day1;
describe('Part 1', () => {
    it('Find fuel test', () => {
        assert.equal(day1.findFuel(12), 2);
        assert.equal(day1.findFuel(14), 2);
        assert.equal(day1.findFuel(1969), 654);
        assert.equal(day1.findFuel(100756), 33583);
    });

    it('Total fuel test', () => {
        assert.equal(day1.totalFuel([12, 14, 1969]), 658);
    });
});

describe('Part 2', () => {
    it('Find fuel test', () => {
        assert.equal(day1.findFuelWithFuelMass(100756), 50346);
    });
});
