import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class Input implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 2;
    operation = (opCodeSet: OpCodeSet): OpCodeSet =>  {
        opCodeSet.states[opCodeSet.states[opCodeSet.index + 1]] = opCodeSet.input.shift().toString();
        opCodeSet.index = opCodeSet.index + this.increment;

        return opCodeSet;
    }
}
