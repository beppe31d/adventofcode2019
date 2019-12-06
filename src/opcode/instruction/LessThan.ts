import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class LessThan implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 4;
    operation = (opCodeSet: OpCodeSet): OpCodeSet =>  {
        const index = opCodeSet.index;
        let states = opCodeSet.states;
        const firstArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 1)) === 1 ? states[index + 1] : states[states[index + 1]];
        const secondArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 2)) === 1 ? states[index + 2] : states[states[index + 2]];
        const thirdArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 3)) === 1 ? index + 3 : parseInt(states[index + 3]);

        if (parseInt(firstArg) < parseInt(secondArg)) {
            states[thirdArg] = "1"
        } else {
            states[thirdArg] = "0"
        }

        return { states, input: opCodeSet.input, output: opCodeSet.output, index: opCodeSet.index + this.increment};
    }
}
