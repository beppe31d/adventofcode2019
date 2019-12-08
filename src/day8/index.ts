import {SpaceImageFormat} from "./SpaceImageFormat";

const sif = new SpaceImageFormat();
const fs = require("fs");
const file = fs.readFileSync("src/day8/input.txt");
let codes = file.toString();

console.log(sif.getDecodeNumber(codes, 25, 6));
