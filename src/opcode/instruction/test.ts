import { assert } from 'chai';
import 'mocha';
import {Add} from "./Add";
import {Mul} from "./Mul";
import {JumpIfTrue} from "./JumpIfTrue";
import {JumpIfFalse} from "./JumpIfFalse";
import {LessThan} from "./LessThan";
import {EqualTo} from "./EqualTo";

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

describe('Jump if true', () => {
    it('True test', () => {
        assert.equal(new JumpIfTrue('11').operation({states: prepare("5,1,7"), input: 0, index: 0 }).index, 7);
    });

    it('False test', () => {
        assert.equal(new JumpIfTrue('11').operation({states: prepare("5,0,7"), input: 0, index: 0 }).index, 3);
    });
});

describe('Jump if false', () => {
    it('True test', () => {
        assert.equal(new JumpIfFalse('11').operation({states: prepare("6,0,7"), input: 0, index: 0 }).index, 7);
    });

    it('False test', () => {
        assert.equal(new JumpIfFalse('11').operation({states: prepare("6,1,7"), input: 0, index: 0 }).index, 3);
    });
});

describe('Less than', () => {
    it('True test', () => {
        assert.equal(new LessThan('11').operation({states: prepare("7,0,7,4,99"), input: 0, index: 0 }).states.join(","), "7,0,7,4,1");
    });

    it('False test', () => {
        assert.equal(new LessThan('11').operation({states: prepare("7,11,7,4,99"), input: 0, index: 0 }).states.join(","), "7,11,7,4,0");
    });
});

describe('Equal to', () => {
    it('True test', () => {
        assert.equal(new EqualTo('11').operation({states: prepare("7,0,0,4,99"), input: 0, index: 0 }).states.join(","), "7,0,0,4,1");
    });

    it('False test', () => {
        assert.equal(new EqualTo('11').operation({states: prepare("7,11,7,4,99"), input: 0, index: 0 }).states.join(","), "7,11,7,4,0");
    });
});
