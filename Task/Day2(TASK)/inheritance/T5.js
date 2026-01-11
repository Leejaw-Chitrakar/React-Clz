// Override drive().
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
        this.name = "Benelli";
        this.engine = "1500cc";
    }
    drive() {
        return "Riding";
    }
}

let newB = new Bike();
console.log(`${newB.name} is ${newB.drive()}`);
