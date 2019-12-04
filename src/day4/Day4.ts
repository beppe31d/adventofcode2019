export class Day4 {
    findAllPasswords = (min: number, max: number): Array<string> => {
        return this.buildConsecutiveCodes(6)
            .filter((item: string): boolean => {
                return this.notUniqueChars(item) && parseInt(item) >= min && parseInt(item) <= max;
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
