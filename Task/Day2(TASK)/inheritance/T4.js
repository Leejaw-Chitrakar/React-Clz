// Extend class Bike.
class Vehicle {
    constructor() {
        this.name = "Tesla";
        this.model = "Model S";
    }
    drive() {
        return "Driving";
    }
}
class Bike extends Vehicle {
    constructor() {
        super();
        this.engine = "1500cc";
    }
    start() {
        return "Starting";
    }
}
let newB = new Bike();
console.log(`${newB.name} is ${newB.start()}`);