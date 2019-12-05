import {InstructionFactory} from "./instruction/InstructionFactory";
import {OpCodeSet} from "./OpCodeSet";

export class OpCode {
    calculate (states: Array<string>, input: number): OpCodeSet
    {
        return this.operation({states, input, output: null}, 0);
    };

    operation(opCodeSet: OpCodeSet, index:number): OpCodeSet
    {
        const codeAndMode = this.extractCodeAndMode(opCodeSet.states[index]);
        const code = codeAndMode.code;
        if (code === 99) {
            return opCodeSet;
        }

        const instruction = new InstructionFactory().create(code, codeAndMode.mode);

        return this.operation(instruction.operation(opCodeSet, index), index + instruction.increment)
    };

    private extractCodeAndMode = (state: string): {code: number, mode: string} => {
        if (state.length <= 2) {
            return {code: parseInt(state), mode: ''};
        }

        return {mode: state.substr(0, state.length - 2), code: parseInt(state.substr(-2))}
    }
}
