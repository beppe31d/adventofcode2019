import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";
import {getIndexByMode} from "./getIndexByMode";

export class Input implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 2;
    operation = (opCodeSet: OpCodeSet): OpCodeSet =>  {
        const states = opCodeSet.states
        let indexByMode = getIndexByMode(states, this.mode, opCodeSet.index, 1, opCodeSet.relativeBase);
        let firstArg = indexByMode >= 0 && states.length > indexByMode ? indexByMode : 0;
        opCodeSet.states[firstArg] = opCodeSet.input.shift().toString();
        opCodeSet.index = opCodeSet.index + this.increment;

        return opCodeSet;
    }
}
