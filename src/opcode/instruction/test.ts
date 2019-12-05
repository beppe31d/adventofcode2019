import { assert } from 'chai';
import 'mocha';
import {Add} from "./Add";
import {Mul} from "./Mul";

const prepare = (value) => value.split(",");

describe('Add', () => {
    it('Zero mode test', () => {
        assert.equal(new Add('').operation({states: prepare("1,1,1,4,99"), input: 0, index: 0 }).states.join(","), "1,1,1,4,2");
    });

    it('Addends in one mode test', () => {
        assert.equal(new Add('011').operation({states: prepare("1,99,1,4,99"), input: 0, index: 0 }).states.join(","), "1,99,1,4,100");
    });
});

describe('Mul', () => {
    it('Zero mode test', () => {
        assert.equal(new Mul('').operation({states: prepare("2,1,1,4,99"), input: 0, index: 0 }).states.join(","), "2,1,1,4,1");
    });

    it('Addends in one mode test', () => {
        assert.equal(new Mul('011').operation({states: prepare("2,100,2,4,99"), input: 0, index: 0 }).states.join(","), "2,100,2,4,200");
    });
});