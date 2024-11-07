"use strict";
{
    //
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = 2024;
            const result = 2024 - this.year;
            console.log(`${result} (assuming current year is ${currentYear})`);
        }
    }
    //
}
