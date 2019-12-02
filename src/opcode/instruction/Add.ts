import { InstructionInterface} from './InstructionInterface'

export class Add implements InstructionInterface{
    increment = 4;
    operation = function(states:Array<number>, index:number): Array<number>  {
        states[states[index + 3]] = states[states[index + 1]] + states[states[index + 2]];

        return states;
    }
}