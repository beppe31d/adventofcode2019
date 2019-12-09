import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";
import {getIndexByMode} from "./getIndexByMode";

export class Output implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 2;
    operation = (opCodeSet: OpCodeSet): OpCodeSet  => {
        if (opCodeSet.output === undefined || opCodeSet.output === null) {
            opCodeSet.output = new Array<number>()
        }
        const states = opCodeSet.states
        let indexByMode = getIndexByMode(states, this.mode, opCodeSet.index, 1, opCodeSet.relativeBase);
        let firstArg = indexByMode >= 0 && states.length > indexByMode ? parseInt(states[indexByMode]) : 0;

        opCodeSet.output.push(firstArg);
        opCodeSet.index = opCodeSet.index + this.increment;

        return opCodeSet;
    }
}
