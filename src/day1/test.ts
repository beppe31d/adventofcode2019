import { Day1 } from './Day1';
import { assert } from 'chai';
import 'mocha';

const day1 = new Day1;
describe('Setup test', () => {
    it('Example test', () => {
        assert.equal(day1.test(), 1)
    });
});
