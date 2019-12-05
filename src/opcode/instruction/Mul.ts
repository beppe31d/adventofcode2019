import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class Mul implements InstructionInterface{
    increment = 4;
    operation = function(opCodeSet: OpCodeSet, index:number): OpCodeSet  {
        let states = opCodeSet.states
        states[states[index + 3]] = parseInt(states[states[index + 1]]) * parseInt(states[states[index + 2]]);

        return { states, input: opCodeSet.input, output: opCodeSet.output };
    }
}