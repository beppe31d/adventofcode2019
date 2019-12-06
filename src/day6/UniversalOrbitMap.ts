export class UniversalOrbitMap {
    orbitNumber = (objects: Array<string>): number => {
        const tree = this.buildTree(objects);

        return this.countOrbits(tree, tree['COM'], 0);
    }

    countOrbits = (tree: Array<Array<string>>, current: Array<string>, orbits: number): number => {
        let counter = orbits;
        if (current.length === 0) {
            return counter;
        }

        current.forEach((object: string) => {
            counter += this.countOrbits(tree, tree[object], orbits + 1);
        })

        return counter
    }

    buildTree = (objects: Array<string>): Array<Array<string>> => {
        let tree = new Array<Array<string>>();
        objects.forEach((item: string) => {
            const codes = item.split(")")
            if (tree[codes[1]] === undefined) {
                tree[codes[1]] = new Array<string>()
            }
            if (tree[codes[0]] === undefined) {
                tree[codes[0]] = new Array<string>()
            }
            tree[codes[0]].push(codes[1])
        });

        return tree;
    }
}
