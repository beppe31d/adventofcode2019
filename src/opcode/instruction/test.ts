import { assert } from 'chai';
import 'mocha';
import {Add} from "./Add";
import {Mul} from "./Mul";
import {JumpIfTrue} from "./JumpIfTrue";
import {JumpIfFalse} from "./JumpIfFalse";
import {LessThan} from "./LessThan";
import {EqualTo} from "./EqualTo";
import {Input} from "./Input";
import {Output} from "./Output";
import {RelativeBase} from "./RelativeBase";

const prepare = (value) => value.split(",");

describe('Add', () => {
    it('Zero mode test', () => {
        assert.equal(new Add('').operation({states: prepare("1,1,1,4,99"), input: [], index: 0 }).states.join(","), "1,1,1,4,2");
    });

    it('Addends in one mode test', () => {
        assert.equal(new Add('011').operation({states: prepare("1,99,1,4,99"), input: [], index: 0 }).states.join(","), "1,99,1,4,100");
    });

    it('Result in one mode test', () => {
        assert.equal(new Add('100').operation({states: prepare("1,1,1,4,99"), input: [], index: 0 }).states.join(","), "1,1,1,2,99");
    });

    it('Complex example Test', () => {
        assert.equal(new Add('10').operation({states: prepare("109,1,204,-1,1001,100,1,100"), input: [], index: 4, relativeBase: 1 }).states.join(","), "1,1,204,-1,1001,100,1,100");
    });
});

describe('Mul', () => {
    it('Zero mode test', () => {
        assert.equal(new Mul('').operation({states: prepare("2,1,1,4,99"), input: [], index: 0 }).states.join(","), "2,1,1,4,1");
    });

    it('Addends in one mode test', () => {
        assert.equal(new Mul('011').operation({states: prepare("2,100,2,4,99"), input: [], index: 0 }).states.join(","), "2,100,2,4,200");
    });

    it('Result in one mode test', () => {
        assert.equal(new Mul('111').operation({states: prepare("2,100,2,4,99"), input: [], index: 0 }).states.join(","), "2,100,2,200,99");
    });
});

describe('Jump if true', () => {
    it('True test', () => {
        assert.equal(new JumpIfTrue('11').operation({states: prepare("5,1,7"), input: [], index: 0 }).index, 7);
    });

    it('False test', () => {
        assert.equal(new JumpIfTrue('11').operation({states: prepare("5,0,7"), input: [], index: 0 }).index, 3);
    });
});

describe('Jump if false', () => {
    it('True test', () => {
        assert.equal(new JumpIfFalse('11').operation({states: prepare("6,0,7"), input: [], index: 0 }).index, 7);
    });

    it('False test', () => {
        assert.equal(new JumpIfFalse('11').operation({states: prepare("6,1,7"), input: [], index: 0 }).index, 3);
    });
});

describe('Less than', () => {
    it('True test', () => {
        assert.equal(new LessThan('011').operation({states: prepare("7,0,7,4,99"), input: [], index: 0 }).states.join(","), "7,0,7,4,1");
    });

    it('False test', () => {
        assert.equal(new LessThan('011').operation({states: prepare("7,11,7,4,99"), input: [], index: 0 }).states.join(","), "7,11,7,4,0");
    });

    it('True test immediate mode', () => {
        assert.equal(new LessThan('111').operation({states: prepare("7,0,7,4,99"), input: [], index: 0 }).states.join(","), "7,0,7,1,99");
    });
});

describe('Equal to', () => {
    it('True test', () => {
        assert.equal(new EqualTo('011').operation({states: prepare("7,0,0,4,0"), input: [], index: 0 }).states.join(","), "7,0,0,4,1");
    });

    it('False test', () => {
        assert.equal(new EqualTo('011').operation({states: prepare("7,11,7,4,0"), input: [], index: 0 }).states.join(","), "7,11,7,4,0");
    });

    it('True test immediate mode', () => {
        assert.equal(new EqualTo('111').operation({states: prepare("7,0,0,4,0"), input: [], index: 0 }).states.join(","), "7,0,0,1,0");
    });
});

describe('Input', () => {
    it('Zero mode test', () => {
        assert.equal(new Input('').operation({states: prepare("3,2,0"), input: [31], index: 0 }).states.join(","), "3,2,31");
    });

    it('Immediate mode test', () => {
        assert.equal(new Input('1').operation({states: prepare("3,2,0"), input: [31], index: 0 }).states.join(","), "3,31,0");
    });
});

describe('Output', () => {
    it('Zero mode test', () => {
        assert.equal(new Output('').operation({states: prepare("4,2,31"), input: [], index: 0 }).output.shift(), 31);
    });

    it('Immediate mode test', () => {
        assert.equal(new Output('1').operation({states: prepare("4,2,31"), input: [], index: 0 }).output.shift(), 2);
    });

    it('Relative mode test', () => {
        assert.equal(new Output('2').operation({states: prepare("109,1,204,-1"), input: [], index: 2, relativeBase: 1 }).output.shift(), 109);
    });
});

describe('Relative base', () => {
    it('Immediate mode test', () => {
        assert.equal(new RelativeBase('1').operation({states: prepare("109,1"), input: [], index: 0 }).relativeBase, 1);
    });
});
