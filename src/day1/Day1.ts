export class Day1 {
    public findFuel = (mass: number)  => {
        return Math.floor(mass / 3) - 2
    };

    public totalFuel = (masses: Array<number>) => {
        return masses.reduce((previousValue: number, currentValue: number) => previousValue + this.findFuel(currentValue), 0)
    };

    public findFuelWithFuelMass = (mass: number) => {
        const fuel = this.findFuel(mass);
        if (fuel <= 0) {
            return 0;
        }

        return fuel + this.findFuelWithFuelMass(fuel)
    };

    public totalFuelWithFuelMass = (masses: Array<number>) => {
        return masses.reduce((previousValue: number, currentValue: number) => previousValue + this.findFuelWithFuelMass(currentValue), 0)
    };
}