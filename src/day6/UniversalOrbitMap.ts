export class UniversalOrbitMap {
    orbitalTransfer = (objects: Array<string>): number => {
        const tree = this.buildTree(objects);
        const pathToMe = this.pathToObject(tree, "COM", "YOU");
        const pathToSanta = this.pathToObject(tree, "COM", "SAN");

        return pathToMe.filter((item) => item !== "YOU" && pathToSanta.includes(item) === false).length +
            pathToSanta.filter((item) => item !== "SAN" && pathToMe.includes(item) === false).length
    }

    pathToObject = (tree: Array<Array<string>>, current: string, toFind: string): Array<string> => {
        if (current === toFind) {
            return [current];
        }

        const treeElement: Array<string> = tree[current];
        if (treeElement.length === 0) {
            return new Array<string>()
        }

        let result = new Array<string>()
        treeElement.forEach((object: string) => {
            const children = this.pathToObject(tree, object, toFind)
            if (children.length > 0) {
                result.push(current)
                children.forEach((item) => {
                    result.push(item)
                })
            }
        });

        return result
    }

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
