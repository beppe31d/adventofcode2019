import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class JumpIfFalse implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 3;
    operation = (opCodeSet: OpCodeSet): OpCodeSet =>  {
        const index = opCodeSet.index;
        let states = opCodeSet.states;
        const firstArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 1)) === 1 ? states[index + 1] : states[states[index + 1]];
        const secondArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 2)) === 1 ? states[index + 2] : states[states[index + 2]];

        if (parseInt(firstArg) === 0) {
            opCodeSet.index = parseInt(secondArg)
        } else {
            opCodeSet.index += this.increment;
        }

        return opCodeSet;
    }
}
