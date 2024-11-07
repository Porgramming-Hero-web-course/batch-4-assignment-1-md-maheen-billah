# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.
Typescript is an upgrade to Javascript as it provides us with the ability to better document our code by adding static typing and advanced features. However in Typescript we often have to deal with data types which varies, which is a bit troublesome. Therefore to ensure that we avoid error and obtain our desired output, type guard plays an essential. At runtime, we are able to narrow down the possible types of a variable using type guard. In short- Safety with Union Types && Narrowing Types && Runtime Type Checking.

## Types of Type Guard
Here I will be talking about the types of type guard I have learned and tried to implement during my practice sessions-
-  `typeof`: In order to differentiate between primitive types(eg- number, string) typeof operator can be implemented.

```ts
type Alphanumeric = string|number;
const add = (param1: Alphanumeric, param2: Alphanumeric):Alphanumeric=>{

    if(typeof param1 === 'number'&& typeof param2 === 'number') {
        return param1+param2
    } else {
        return param1.toString() + param2.toString();
    }
    
}

const result1 = add(2,'3');

```
-  `instanceof`: Can be used to differentiate between objects consisting of different classes or if an objects is an instance of a constructor function.

```ts
class Car {
    name: string;
    model: string;

    constructor(name: string, model:string){
        this.name= name;
        this.model= model;
    }

    horn(){
        console.log(`beep beep`);
    }
}

class Car1 extends Car {

    constructor(name:string,model:string){
        super(name,model)
    }

    specialBrakes(){
        console.log(`It has special brakes`);
    }
}

class Car2 extends Car {

    constructor(name:string,model:string){
        super(name,model)
    }

    nos(){
        console.log(`It has nos`);
    }
}

const isCar1 =(car:Car):car is Car1=>{
    return car instanceof Car1;
}
const isCar2 =(car:Car):car is Car2=>{
    return car instanceof Car2;
}

const getCar = (car: Car) => {
    if(isCar1(car)){
        car.specialBrakes()
    }
    else if(isCar2(car)){
        car.nos()
    }
    else {
        car.horn()
    }
}

const car1 = new Car1("Toyota","Corolla X")
const car2 = new Car2("Toyota","Corolla Z")


getCar(car1);
getCar(car2);

```
-  `in`: Used to check properties of objects to discover whether the object contain a specific property.

```ts
type NormalDog = {
    name: string;
}

type SecurityDog = {
    name: string;
    role: 'security'
}

const getDog = (dog: NormalDog|SecurityDog)=>{
    if('role'in dog){
        console.log(`${dog.name} has a is ${dog.role} role`);
    }
    else{
        console.log(`${dog.name} has no roles`);
    }
}

const normalDog: NormalDog = {
    name: 'Mr. Normal',
}

const securityDog: SecurityDog = {
    name: 'Mr. Admin',
    role: 'security',
}

getDog(securityDog);
getDog(normalDog);

```
-  `Discriminated Union Type Guards`: Used in complex union types with shared properties. Can be used to you can use that to distinguish between the different cases when each variant of a union type has a unique literal value or property.

```ts
type Circle = {
        shape: "circle";
        radius: number;
    }
    
type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }
    
type Area = Circle | Rectangle;
    
const calculateShapeArea = (area: Area):number=>{
    if(area.shape === "circle") {
            const result = parseFloat((Math.PI*area.radius*area.radius).toFixed(2));
            console.log(result);
            return result;
    }
    else{
            const result = parseFloat((area.width*area.height).toFixed(2));
            console.log(result);
            return result;
    }
}

```





