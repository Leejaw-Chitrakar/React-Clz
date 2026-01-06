// class: Blueprint of an object
// object: instance of the class

class Car{
    #grade;
    // constructor is called when object is created
    // it is initial steup of the object
    constructor(name,color,model,makeYear){
        // dfefining property inside the class
        // must use this
        this.name = name;
        this.color = color;
        this.model = model;
        this.year = makeYear;
        this.#grade = "A";
        console.log("Car construstor is called");
    }

    start(){
        console.log(`${this.name} is started`);
    }

    #stop(){
        console.log(`${this.#grade} is stoped`);
    }

    displayDetails(myname){
        this.myname = myname;
        console.log(`\nMy name is ${this.myname} \nName of the car is ${this.name} of mofel ${this.model}, \nIt is in ${this.color}, was lunched on ${this.makeYear}`);
        this.#stop();
    }
}

// Creating instance or object of class Car
let tesla = new Car("Tesla","Black","Model T",2025);
let byd = new Car("BYD","Red","Model 2",2024);
// accessing property of class using object 
console.log("Car name is: ",tesla.name);
console.log("Car color is: ",tesla.color);
console.log("Car model is: ",tesla.model);
console.log("Car year is: ",tesla.year);
tesla.start();
console.log("\n");
// accessing byd objcct property
console.log("Car name is: ",byd.name);
console.log("Car color is: ",byd.color);
console.log("Car model is: ",byd.model);
console.log("Car year is: ",byd.year);
byd.start();

// byd.stop(); error due to private fnx


tesla.displayDetails("Ram");