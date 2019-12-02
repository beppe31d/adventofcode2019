import { Day1 } from './Day1';

const day1 = new Day1;
const fs = require("fs");
const file = fs.readFileSync("src/day1/input.txt");
const masses = file.toString().split("\n").map((value: string) => parseInt(value));

console.log(day1.totalFuel(masses));
