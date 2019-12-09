import {InstructionFactory} from "./instruction/InstructionFactory";
import {OpCodeSet} from "./OpCodeSet";
import {Output} from "./instruction/Output";

export class OpCode {
    calculate (states: Array<string>, input: Array<number>): OpCodeSet
    {
        let opCodeSet: OpCodeSet = {states, input, output: null, index: 0, relativeBase: 0};
        while (opCodeSet.exit === undefined || opCodeSet.exit === null) {
            opCodeSet = this.operation(opCodeSet);
        }

        return opCodeSet;
    };

    operation(opCodeSet: OpCodeSet): OpCodeSet
    {
        const codeAndMode = this.extractCodeAndMode(opCodeSet.states[opCodeSet.index]);
        const code = codeAndMode.code;
        if (code === 99) {
            opCodeSet.exit = 1;

            return opCodeSet;
        }

        const instruction = new InstructionFactory().create(code, codeAndMode.mode);
        let result = instruction.operation(opCodeSet);
        if (instruction instanceof Output) {
            return result;
        }

        return this.operation(result);
    };

    private extractCodeAndMode = (state: string): {code: number, mode: string} => {
        if (state.length <= 2) {
            return {code: parseInt(state), mode: ''};
        }

        return {mode: state.substr(0, state.length - 2), code: parseInt(state.substr(-2))}
    }
}
