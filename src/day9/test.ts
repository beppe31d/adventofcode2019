import { OpCode } from '../opcode/OpCode';
import { assert } from 'chai';
import 'mocha';

const prepare = (value) => value.split(",");

const opCode = new OpCode();
describe('Part 1', () => {
    it('Example 1', () => {
        const states = "109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99";
        assert.equal(opCode.calculate(prepare(states), []).output.join(","), states);
    });

    it('Example 2', () => {
        const states = "1102,34915192,34915192,7,4,7,99,0";
        assert.isTrue(opCode.calculate(prepare(states), []).output.shift() >= 1000000000000000);
    });

    it('Example 3', () => {
        const states = "104,1125899906842624,99";
        assert.equal(opCode.calculate(prepare(states), []).output.shift(), 1125899906842624);
    });
});