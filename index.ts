class Rg {

    constructor() { }

    private number(min: number, max: number): number {
        if (min >= max) {
            console.error(`${min} is grater then ${max} but must be less`);
            process.exit();
        }
        return Math.floor(Math.random() * (max - min)) + min;
    }

    genOne(min: number, max: number): number {
        return this.number(min, max);
    }

    genMany(min: number, max: number, quantity: number = 1): number[] {
        const count: number[] = [];
        for (let i = 0; i < quantity; i++) {
            count.push(this.number(min, max));
        }
        return count;
    }

    genDate(min: Date, max: Date): Date {

        if (min instanceof Date && max instanceof Date) {
            console.error(`${min} or ${max} is not a instance of Date. This arguments must be a date object,`);
            process.exit();
        }

        const minI: number = Date.parse(String(min));
        const maxI: number = Date.parse(String(max));
        if (minI >= maxI) {
            console.error(`${min} is later then ${max} but must be earlier`);
            process.exit();
        }
        return new Date(this.number(minI, maxI));
    }

    genManyDate(min: Date, max: Date, quantity: number = 1) {
        const count: Date[] = [];
        for (let i = 0; i < quantity; i++) {
            const d: Date = this.genDate(min, max);
            count.push(d);
        }
        return count;
    }

    genFloat(min: number, max: number, decimalPlaces: number = 2): number {
        if (min >= max) {
            console.error(`${min} is grater then ${max} but must be less`);
            process.exit();
        }
        return Number((Math.random() * (max - min) + min).toFixed(decimalPlaces));
    }

    genManyFloat(min: number, max: number, decimalPlaces: number = 2, quantity: number = 10): number[] {
        const count: number[] = [];
        for (let i = 0; i < quantity; i++) {
            count.push(this.genFloat(min, max, decimalPlaces));
        }
        return count;
    }

    genBool() {
        return !!this.number(0, 2)
    }

    genManyBool(quantity: number = 1) {
        const count: boolean[] = [];
        for (let i = 0; i < quantity; i++) {
            count.push(!!this.number(0, 2));
        }
        return count;
    }
}

export const rg = new Rg();
