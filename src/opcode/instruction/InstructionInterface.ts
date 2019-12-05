import {OpCodeSet} from "../OpCodeSet";

export interface InstructionInterface {
    increment: number;
    operation: (opCodeSet: OpCodeSet, index:number) => OpCodeSet
}
