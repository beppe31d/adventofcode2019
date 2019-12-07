import { OpCode } from '../opcode/OpCode';

const opCode = new OpCode();
const fs = require("fs");
const file = fs.readFileSync("src/day5/input.txt");
let initialStates = file.toString().split(",");

let states = initialStates.map((item) => item);
console.log(opCode.calculate(states, [1]).output);

states = initialStates.map((item) => item);
console.log(opCode.calculate(states, [5]).output);
