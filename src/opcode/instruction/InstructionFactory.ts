import { InstructionInterface} from './InstructionInterface'
import { Add } from './Add'
import { Mul } from './Mul'
import {Input} from "./Input";
import {Output} from "./Output";

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
        }
    }
}