import {InstructionFactory} from "./instruction/InstructionFactory";

export class OpCode {
    calculate (states: Array<string>): Array<string>
    {
        return this.operation(states, 0);
    };

    operation(states: Array<string>, index:number): Array<string>
    {
        const code = parseInt(states[index]);
        if (code === 99) {
            return states;
        }

        const instruction = new InstructionFactory().create(code);

        return this.operation(instruction.operation(states, index), index + instruction.increment)
    };
}
