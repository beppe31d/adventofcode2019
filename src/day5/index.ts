import { OpCode } from '../opcode/OpCode';

const opCode = new OpCode();
const fs = require("fs");
const file = fs.readFileSync("src/day5/input.txt");
let initialStates = file.toString().split(",");

console.log(opCode.calculate(initialStates, 1).output);
