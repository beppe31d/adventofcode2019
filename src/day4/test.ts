import { Day4 } from "./Day4";
import { assert } from 'chai';
import 'mocha';

const day4 = new Day4();
describe('Part 1', () => {
    it('Build consecutive number test', () => {
        assert.equal(day4.buildConsecutiveCodes(1).length, 10);
        assert.equal(day4.buildConsecutiveCodes(2).length, 55);
    });

    it('Not unique chars test', () => {
        assert.isTrue(day4.notUniqueChars("111111"))
        assert.isFalse(day4.notUniqueChars("123789"))
    });
});
