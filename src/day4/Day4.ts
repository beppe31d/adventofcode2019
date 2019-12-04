export class Day4 {
    findAllPasswords = (min: number, max: number): Array<string> => {
        return this.buildConsecutiveCodes(6)
            .filter((item: string): boolean => {
                return parseInt(item) >= min && parseInt(item) <= max && this.notUniqueChars(item);
            })
    }

    findAllPasswordsWithAdjacentChars = (min: number, max: number): Array<string> => {
        return this.buildConsecutiveCodes(6)
            .filter((item: string): boolean => {
                return parseInt(item) >= min && parseInt(item) <= max && this.hasOnlyTwoAdjacentChars(item);
            })
    }

    notUniqueChars = (value: string): boolean => {
        for (let i = 1; i < value.length; i++) {
            if (value.charAt(i) === value.charAt(i - 1)) {
                return true
            }
        }

        return false;
    }

    hasOnlyTwoAdjacentChars = (value: string): boolean => {
        for (let i = 1; i < value.length; i++) {
            if (value.charAt(i) === value.charAt(i - 1)) {
                let adjacentCount = 2;
                let newIndex = i
                for (let j = i + 1; j < value.length; j++) {
                    newIndex = j
                    if (value.charAt(i) === value.charAt(j)) {
                        adjacentCount++;
                    } else {
                        break;
                    }
                }

                if (adjacentCount === 2) {
                    return true;
                }
                i = newIndex
            }
        }

        return false;
    }

    buildConsecutiveCodes = (length: number): Array<string> => {
        return this.buildConsecutiveCodesRecursive(0, 1, length)
    };

    private buildConsecutiveCodesRecursive = (startNumber: number, level: number, length: number): Array<string> => {
        let codes = new Array<string>();

        if (level === length) {
            for (let i = startNumber; i < 10; i++) {
                codes.push(i.toString());
            }

            return codes;
        }

        for (let i = startNumber; i < 10; i++) {
            this.buildConsecutiveCodesRecursive(i, level + 1, length).forEach((item) => {
                codes.push(i + "" + item)
            })
        }

        return codes;
    }
}
