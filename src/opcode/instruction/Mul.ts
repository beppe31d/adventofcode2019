import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";
import {getIndexByMode} from "./getIndexByMode";

export class Mul implements InstructionInterface {
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 4;
    operation = (opCodeSet: OpCodeSet): OpCodeSet => {
        const index = opCodeSet.index
        let states = opCodeSet.states
        const firstArg = parseInt(states[getIndexByMode(states, this.mode, index, 1, opCodeSet.relativeBase)]);
        const secondArg = parseInt(states[getIndexByMode(states, this.mode, index, 2, opCodeSet.relativeBase)]);
        const thirdArg = getIndexByMode(states, this.mode, index, 3);
        states[thirdArg] = (firstArg * secondArg).toString();

        return { states, input: opCodeSet.input, output: opCodeSet.output, index: opCodeSet.index + this.increment};
    }
}