// Add method drive().
class Vehicle {
    constructor() {
        this.name = "Tesla";
        this.model = "Model S";
    }
    drive() {
        return "Driving";
    }
}
let newV = new Vehicle();
console.log(`${newV.name} is ${newV.drive()}`);