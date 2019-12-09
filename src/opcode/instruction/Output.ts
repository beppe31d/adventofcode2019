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
        opCodeSet.output.push(parseInt(opCodeSet.states[getIndexByMode(opCodeSet.states, this.mode, opCodeSet.index, 1)]));
        opCodeSet.index = opCodeSet.index + this.increment;

        return opCodeSet;
    }
}
