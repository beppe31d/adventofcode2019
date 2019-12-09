import { InstructionInterface} from './InstructionInterface'
import {OpCodeSet} from "../OpCodeSet";
import {getIndexByMode} from "./getIndexByMode";

export class JumpIfTrue implements InstructionInterface{
    mode: string;
    constructor(mode: string) {
        this.mode = mode;
    }

    increment = 3;
    operation = (opCodeSet: OpCodeSet): OpCodeSet =>  {
        const index = opCodeSet.index;
        let states = opCodeSet.states;
        const firstArg = parseInt(states[getIndexByMode(states, this.mode, index, 1, opCodeSet.relativeBase)]);
        const secondArg = parseInt(states[getIndexByMode(states, this.mode, index, 2, opCodeSet.relativeBase)]);

        if (firstArg !== 0) {
            opCodeSet.index = secondArg
        } else {
            opCodeSet.index += this.increment;
        }

        return opCodeSet;
    }
}
