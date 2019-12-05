import { InstructionInterface} from './InstructionInterface'

export class Add implements InstructionInterface{
    increment = 4;
    operation = function(states:Array<string>, index:number): Array<string>  {
        states[states[index + 3]] = parseInt(states[states[index + 1]]) + parseInt(states[states[index + 2]]);

        return states;
    }
}