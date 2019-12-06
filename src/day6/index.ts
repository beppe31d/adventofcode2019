import {UniversalOrbitMap} from "./UniversalOrbitMap";

const uom = new UniversalOrbitMap();
const fs = require("fs");
const file = fs.readFileSync("src/day6/input.txt");
let objects = file.toString().split("\n");

console.log(uom.orbitNumber(objects));
