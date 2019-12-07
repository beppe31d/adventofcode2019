import {Amplifier} from "./Amplifier";

const amplifier = new Amplifier();
const fs = require("fs");
const file = fs.readFileSync("src/day7/input.txt");
let initialStates = file.toString().split(",");

let states = initialStates.map((item) => item);
console.log(amplifier.start(states, 5).signal);
