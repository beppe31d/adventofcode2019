import { assert } from 'chai';
import 'mocha';
import {UniversalOrbitMap} from "./UniversalOrbitMap";

const prepare = (value) => value.split("\n");

const uom = new UniversalOrbitMap();
describe('Part 1', () => {
    it('Orbit number test', () => {
        const objects = "COM)B\n" +
            "B)C\n" +
            "C)D\n" +
            "D)E\n" +
            "E)F\n" +
            "B)G\n" +
            "G)H\n" +
            "D)I\n" +
            "E)J\n" +
            "J)K\n" +
            "K)L";
        assert.equal(uom.orbitNumber(prepare(objects)), 42)
    });
});

describe('Part 2', () => {
    it('Orbit number test', () => {
        const objects = "COM)B\n" +
            "B)C\n" +
            "C)D\n" +
            "D)E\n" +
            "E)F\n" +
            "B)G\n" +
            "G)H\n" +
            "D)I\n" +
            "E)J\n" +
            "J)K\n" +
            "K)L\n" +
            "K)YOU\n" +
            "I)SAN";
        assert.equal(uom.orbitalTransfer(prepare(objects)), 4)
    });
});