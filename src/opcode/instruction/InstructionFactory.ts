import { InstructionInterface} from './InstructionInterface'
import { Add } from './Add'
import { Mul } from './Mul'

export class InstructionFactory {
    create = function(code: number): InstructionInterface {
        switch (code) {
            case 1:
                return new Add;
            case 2:
                return new Mul;
        }
    }
}