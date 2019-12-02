export class OpCode {
    calculate (states: Array<number>): Array<number>
    {
        return this.operation(states, 0);
    };

    operation(states: Array<number>, index:number): Array<number>
    {
        switch (states[index]) {
            case 1:
                return this.operation(this.add(states, index), index + 4);
            case 2:
                return this.operation(this.mul(states, index), index + 4);
            case 99:
                return states;
        }
    };

    add (states: Array<number>, index:number): Array<number>
    {
        states[states[index + 3]] = states[states[index + 1]] + states[states[index + 2]];

        return states;
    }

    mul (states: Array<number>, index:number): Array<number>
    {
        states[states[index + 3]] = states[states[index + 1]] * states[states[index + 2]];

        return states;
    }
}
