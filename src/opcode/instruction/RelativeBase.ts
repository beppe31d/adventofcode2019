import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";
import {getIndexByMode} from "./getIndexByMode";

export class RelativeBase implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 2;
    operation = (opCodeSet: OpCodeSet): OpCodeSet  => {
        if (opCodeSet.relativeBase === undefined || opCodeSet.relativeBase === null) {
            opCodeSet.relativeBase = 0;
        }
        const states = opCodeSet.states
        let indexByMode = getIndexByMode(states, this.mode, opCodeSet.index, 1, opCodeSet.relativeBase);
        let firstArg = indexByMode > 0 && states.length > indexByMode ? parseInt(states[indexByMode]) : 0;

        opCodeSet.relativeBase += firstArg;
        opCodeSet.index = opCodeSet.index + this.increment;

        return opCodeSet;
    }
}
