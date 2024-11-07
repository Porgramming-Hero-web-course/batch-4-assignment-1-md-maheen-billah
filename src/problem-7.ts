{
    //

    class Car {
        constructor(public make:string, public model:string, public year:number){}
    
        getCarAge(){
            const currentYear:number = 2024;
            const result = 2024 - this.year;
            console.log(`${result} (assuming current year is ${currentYear})`);
        }
    }

    //
}