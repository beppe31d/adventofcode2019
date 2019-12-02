export class Day1 {
    public findFuel = (mass: number)  => {
        return Math.floor(mass / 3) - 2
    };

    public totalFuel = (masses: Array<number>) => {
        return masses.reduce((previousValue: number, currentValue: number) => previousValue + this.findFuel(currentValue), 0)
    }
}