import {Amplifier} from "./Amplifier";

;import { assert } from 'chai';
import 'mocha';

const prepare = (value) => value.split(",");

const amplifier = new Amplifier();
describe('Part 1', () => {
    it('Amplify example 1', () => {
        const states = "3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0";
        let result = amplifier.start(prepare(states), 5);
        assert.equal(result.signal, 43210);
        assert.equal(result.phases.join(","), "4,3,2,1,0");
    });

    it('Amplify example 2', () => {
        const states = "3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0";
        let result = amplifier.start(prepare(states), 5);
        assert.equal(result.signal, 54321);
        assert.equal(result.phases.join(","), "0,1,2,3,4");
    });

    it('Amplify example 3', () => {
        const states = "3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0";
        let result = amplifier.start(prepare(states), 5);
        assert.equal(result.signal, 65210);
        assert.equal(result.phases.join(","), "1,0,4,3,2");
    });
});