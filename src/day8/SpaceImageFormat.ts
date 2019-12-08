export class SpaceImageFormat {
    getDecodeNumber = (input: string, width: number, height: number): number => {
        const layer = this.getLayerWithFewestZero(input, width, height);

        return layer.filter((item) => parseInt(item) === 1).length *
            layer.filter((item) => parseInt(item) === 2).length;
    }

    getLayerWithFewestZero = (input: string, width: number, height: number): Array<string> => {
        return this.divideLayers(input, width, height).reduce((previousValue, currentValue) => {
            if (previousValue.filter((item) => parseInt(item) === 0).length >
                currentValue.filter((item) => parseInt(item) === 0).length) {
                return currentValue
            }

            return previousValue;
        })
    }

    divideLayers = (input: string, width: number, height: number): Array<Array<string>> => {
        return this.chunk(input.split(""), width * height).slice(0, -1);
    }

    private chunk = (array: Array<string>, size:number): Array<Array<string>> => {
        if (!array) return [];
        const firstChunk = array.slice(0, size);
        if (!firstChunk.length) {
            return new Array(array);
        }
        return [firstChunk].concat(this.chunk(array.slice(size, array.length), size));
    }
}