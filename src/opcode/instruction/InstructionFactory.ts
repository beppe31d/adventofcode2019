import { InstructionInterface} from './InstructionInterface'
import { Add } from './Add'
import { Mul } from './Mul'
import {Input} from "./Input";
import {Output} from "./Output";
import {JumpIfTrue} from "./JumpIfTrue";
import {JumpIfFalse} from "./JumpIfFalse";
import {LessThan} from "./LessThan";
import {EqualTo} from "./EqualTo";

export class InstructionFactory {
    create = function(code: number, mode: string): InstructionInterface {
        switch (code) {
            case 1:
                return new Add(mode);
            case 2:
                return new Mul(mode);
            case 3:
                return new Input(mode);
            case 4:
                return new Output(mode);
            case 5:
                return new JumpIfTrue(mode);
            case 6:
                return new JumpIfFalse(mode);
            case 7:
                return new LessThan(mode);
            case 8:
                return new EqualTo(mode);
        }
    }
}