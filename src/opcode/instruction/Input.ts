import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class Input implements InstructionInterface{
    increment = 2;
    operation = function(opCodeSet: OpCodeSet, index:number): OpCodeSet  {
        opCodeSet.states[opCodeSet.states[index + 1]] = opCodeSet.input;

        return opCodeSet;
    }
}