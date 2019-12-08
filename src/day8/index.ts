import {SpaceImageFormat} from "./SpaceImageFormat";

const sif = new SpaceImageFormat();
const fs = require("fs");
const file = fs.readFileSync("src/day8/input.txt");
let codes = file.toString();

console.log(sif.getDecodeNumber(codes, 25, 6));

const finalImage = sif.getFinalImage(codes, 25,6);
for (let index = 0; index < finalImage.length; index+= 25) {
    console.log(finalImage.slice(index, index + 24).join(""))
}
