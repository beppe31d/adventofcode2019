import { OpCode } from '../opcode/OpCode';

const opCode = new OpCode();
const fs = require("fs");
const file = fs.readFileSync("src/day2/input.txt");
let initialStates = file.toString().split(",");

let states = initialStates.map((item) => item);
states[1] = "12";
states[2] = "2";
let result = opCode.calculate(states);

console.log(result[0]);

for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
        states = initialStates.map((item) => item);
        states[1] = noun;
        states[2] = verb;
        result = opCode.calculate(states);
        if (result !== undefined && result[0] === "19690720") {
            console.log (noun, verb);
        }
    }
}
