import { OpCode } from '../opcode/OpCode';
import { assert } from 'chai';
import 'mocha';

const prepare = (value) => value.split(",");

const opCode = new OpCode();
describe('Part 1', () => {
    it('Calculate test', () => {
        assert.equal(opCode.calculate(prepare("1,0,0,0,99"), 0).states.join(","), "2,0,0,0,99");
        assert.equal(opCode.calculate(prepare("2,3,0,3,99"), 0).states.join(","), "2,3,0,6,99");
        assert.equal(opCode.calculate(prepare("2,4,4,5,99,0"), 0).states.join(","), "2,4,4,5,99,9801");
        assert.equal(opCode.calculate(prepare("1,1,1,4,99,5,6,0,99"), 0).states.join(","), "30,1,1,4,2,5,6,0,99");
    });
});