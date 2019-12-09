import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";
import {getIndexByMode} from "./getIndexByMode";

export class LessThan implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 4;
    operation = (opCodeSet: OpCodeSet): OpCodeSet =>  {
        const index = opCodeSet.index;
        let states = opCodeSet.states;
        const firstArg = parseInt(states[getIndexByMode(states, this.mode, index, 1)]);
        const secondArg = parseInt(states[getIndexByMode(states, this.mode, index, 2)]);
        const thirdArg = getIndexByMode(states, this.mode, index, 3);

        if (firstArg < secondArg) {
            states[thirdArg] = "1"
        } else {
            states[thirdArg] = "0"
        }

        return { states, input: opCodeSet.input, output: opCodeSet.output, index: opCodeSet.index + this.increment};
    }
}
