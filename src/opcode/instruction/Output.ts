import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class Output implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 2;
    operation = (opCodeSet: OpCodeSet): OpCodeSet  => {
        const firstArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 1)) === 1 ? opCodeSet.states[opCodeSet.index + 1] : opCodeSet.states[opCodeSet.states[opCodeSet.index + 1]];
        opCodeSet.output = parseInt(firstArg);
        opCodeSet.index = opCodeSet.index + this.increment;

        return opCodeSet;
    }
}
