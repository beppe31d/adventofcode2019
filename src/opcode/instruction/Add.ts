import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";

export class Add implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 4;
    operation = (opCodeSet: OpCodeSet, index:number): OpCodeSet =>  {
        let states = opCodeSet.states;
        const firstArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 1)) === 1 ? states[index + 1] : states[states[index + 1]];
        const secondArg = this.mode.length > 0 && parseInt(this.mode.charAt(this.mode.length - 2)) === 1 ? states[index + 2] : states[states[index + 2]];
        states[states[index + 3]] = (parseInt(firstArg) + parseInt(secondArg)).toString();

        return { states, input: opCodeSet.input, output: opCodeSet.output };
    }
}