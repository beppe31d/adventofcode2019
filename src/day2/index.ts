import { OpCode } from './OpCode';

const opCode = new OpCode();
const fs = require("fs");
const file = fs.readFileSync("src/day2/input.txt");
let states = file.toString().split(",").map((value: string) => parseInt(value));

states[1] = 12;
states[2] = 2;
let result = opCode.calculate(states);

console.log(result[0]);
