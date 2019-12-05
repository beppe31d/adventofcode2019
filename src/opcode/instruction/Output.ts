import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class Output implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 2;
    operation = function(opCodeSet: OpCodeSet, index:number): OpCodeSet  {
        opCodeSet.output = opCodeSet.states[opCodeSet.states[index + 1]];

        return opCodeSet;
    }
}
