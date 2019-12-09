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
        opCodeSet.relativeBase += parseInt(opCodeSet.states[getIndexByMode(opCodeSet.states, this.mode, opCodeSet.index, 1, opCodeSet.relativeBase)]);
        opCodeSet.index = opCodeSet.index + this.increment;

        return opCodeSet;
    }
}
