class Vehicle {
    constructor(make, model, year, color) {
        try {

            this.make = make;
            this.model = model;
            this.year = year;
            this.color = color;
        }
        catch (e) {
            console.log("Error in vehicle constructor", e.message);
        }
    }
    start() {
        console.log("vehicle is starting");
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, doors) {

        try {
            super(make, model, year, color);
            this.doors = doors;
        }
        catch (e) {
            console.log("Error in car constructor", e.message);
        }
    }
    Overstart() {
        console.log("starting a car : ");
    }

}

class Motorcycle extends Vehicle {
    constructor(make, model, year, color, hasHandlebars) {

        try {
            super(make, model, year, color);
            this.hasHandlebars = hasHandlebars;
        }
        catch (e) {
            console.log("Error in Motorcycle constructor", e.message);
        }
    }
    start() {
        console.log("starting a motorcycle");
    }
    getAge() {

        console.log("vehical Age is : ", nowYear - this.year);

    }
}
var nowYear = new Date().getFullYear()
let ve1 = new Vehicle("2010", "swift202", 2000, "black");
let carInstance = new Car("2019", "Swift2019", 2018, "black", "automaticDoor");
let MotorcycleInstace = new Motorcycle("2020", "Tata2022", 2000, "red", "Yes");
console.log(ve1);
console.log(carInstance);
console.log(MotorcycleInstace);
MotorcycleInstace.getAge();