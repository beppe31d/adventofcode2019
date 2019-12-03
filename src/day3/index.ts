import { Day3 } from "./Day3";

const fs = require("fs");
const file = fs.readFileSync("src/day3/input.txt");
let paths = file.toString().split("\n").map((value: string) => value.split(","));

const day3 = new Day3();
const matchingPoints = day3.findMatchingPoints(paths[0], paths[1]);
console.log(day3.findMinDistance(matchingPoints));

console.log(day3.findMinPath(matchingPoints, paths[0], paths[1]));
