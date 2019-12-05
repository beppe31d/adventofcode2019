import {OpCodeSet} from "../OpCodeSet";

export interface InstructionInterface {
    increment: number;
    operation: (opCodeSet: OpCodeSet) => OpCodeSet
}
