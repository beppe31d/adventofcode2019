import { OpCode } from '../opcode/OpCode';
import { assert } from 'chai';
import 'mocha';

const prepare = (value) => value.split(",");

const opCode = new OpCode();
describe('Part 2', () => {
    it('Calculate simple test', () => {
        const states = "3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9";
        assert.equal(opCode.calculate(prepare(states), [1]).output.shift(), 1);
        assert.equal(opCode.calculate(prepare(states), [0]).output.shift(), 0);
    });

    it('Calculate simple test 2', () => {
        const states = "3,3,1105,-1,9,1101,0,0,12,4,12,99,1";
        assert.equal(opCode.calculate(prepare(states), [1]).output.shift(), 1);
        assert.equal(opCode.calculate(prepare(states), [0]).output.shift(), 0);
    });

    it('Calculate larger test', () => {
        const states = "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99";
        assert.equal(opCode.calculate(prepare(states), [7]).output.shift(), 999);
        assert.equal(opCode.calculate(prepare(states), [8]).output.shift(), 1000);
        assert.equal(opCode.calculate(prepare(states), [9]).output.shift(), 1001);
    });
});