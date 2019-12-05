import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class Input implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 2;
    operation = (opCodeSet: OpCodeSet, index:number): OpCodeSet =>  {
        opCodeSet.states[opCodeSet.states[index + 1]] = opCodeSet.input.toString();

        return opCodeSet;
    }
}
