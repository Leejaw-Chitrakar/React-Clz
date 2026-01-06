/// inheritance: the ability of an object ri inherit properties and method from another object
// parent class

class Vehicle{
    constructor(name,sound,year,model){
        this.name = name;
        this.sound = sound;
        this.year = year;
        this.model = model;
        console.log("Vehicle constructor is called");
    }

    makeSound(sound){
        console.log(`${this.name} makes ${sound}`);
    }

    displayNumOfWheels(){
        console.log(`${this.name} has 4 wheels.`)
    }
}

// child class
class Car extends Vehicle{
    constructor(name,model,year,color){
        // calling parent class constructor
        super(name,model,year)
        // new property for Car class
        this.color = color;
        console.log("Car constructor is called")
    }
}

class Bike extends Vehicle{
    constructor(name,model,year,color,NumWheels){
        // calling parent class constructor
        super(name,model,year)
        // new property for Bike class
        this.color = color;
        this.NumWheels = NumWheels;
        console.log("Bike constructor is called")
    }
    // method overifing: defining same method in child class
    displayNumOfWheels(){
        console.log(`${this.name} has 2 wheels.`)
    }
}

let myCar = new Car("Tesla","Black","T",2025);
let myBike = new Bike("Honda","Red","H",2023);
console.log(myCar.name);
myCar.makeSound("vroom vroom");
myCar.displayNumOfWheels();
console.log(myBike.name);
myBike.makeSound("Weeeeeeeeeeeeeeeeeeee");
myBike.displayNumOfWheels(2);