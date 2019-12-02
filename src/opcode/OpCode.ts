import {InstructionFactory} from "./instruction/InstructionFactory";

export class OpCode {
    calculate (states: Array<number>): Array<number>
    {
        return this.operation(states, 0);
    };

    operation(states: Array<number>, index:number): Array<number>
    {
        if (states[index] === 99) {
            return states;
        }

        const instruction = new InstructionFactory().create(states[index]);
        return this.operation(instruction.operation(states, index), index + instruction.increment)
    };
}
