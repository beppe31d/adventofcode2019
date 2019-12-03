import { Day3 } from './Day3';
import { Point } from "./Point";
import { assert } from 'chai';
import 'mocha';

const prepare = (value) => value.split(",");

const day3 = new Day3();
describe('Part 1', () => {
    it('Build points test', () => {
        assert.equal(day3.buildPoints(prepare("R8,U5,L5,D3")).length, 21);
    });

    it('Find matching points test', () => {
        assert.equal(day3.findMatchingPoints(prepare("R8,U5,L5,D3"), prepare("U7,R6,D4,L4")).length, 2);
    });

    it('Find min distance point test', () => {
        const result = day3.findMinDistancePoint(prepare("R8,U5,L5,D3"), prepare("U7,R6,D4,L4"));
        assert.equal(result.equal(new Point(3, 3)), 0);
    });

    it('Find min manhattan distance test', () => {
        assert.equal(day3.findMinDistance(prepare("R8,U5,L5,D3"), prepare("U7,R6,D4,L4")), 6);
        assert.equal(day3.findMinDistance(prepare("R75,D30,R83,U83,L12,D49,R71,U7,L72"), prepare("U62,R66,U55,R34,D71,R55,D58,R83")), 159);
        assert.equal(day3.findMinDistance(prepare("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51"), prepare("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7")), 135);
    });
});