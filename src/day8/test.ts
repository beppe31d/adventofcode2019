import { assert } from 'chai';
import 'mocha';
import {SpaceImageFormat} from "./SpaceImageFormat";

const sif = new SpaceImageFormat();
describe('Part 1', () => {
    it('Divide layers test', () => {
        let result = sif.divideLayers("123456789012", 3, 2);
        assert.equal(result.length, 2);
    });

    it('Get layer with fewest zero test', () => {
        let result = sif.getLayerWithFewestZero("123456789012", 3, 2);
        assert.equal(result.join(""), "123456");
    });

    it('Get decode test', () => {
        assert.equal(sif.getDecodeNumber("123456789012", 3, 2), 1);
    });
});