import {InstructionFactory} from "./instruction/InstructionFactory";
import {OpCodeSet} from "./OpCodeSet";

export class OpCode {
    calculate (states: Array<string>, input: number): OpCodeSet
    {
        return this.operation({states, input, output: null}, 0);
    };

    operation(opCodeSet: OpCodeSet, index:number): OpCodeSet
    {
        const code = parseInt(opCodeSet.states[index]);
        if (code === 99) {
            return opCodeSet;
        }

        const instruction = new InstructionFactory().create(code);

        return this.operation(instruction.operation(opCodeSet, index), index + instruction.increment)
    };
}
