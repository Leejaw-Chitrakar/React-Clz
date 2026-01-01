// this always refer to the nearest object or insance

let obj1 = {
    price: 400,
    fruitName: "apple",
    weight: 2,
    unit: "Kg",
    totalCost: function(){
        let totalPrice = this.price * this.weight;
        console.log("Inside Total Cost function: ", totalPrice)
    },
    displayFruitName: ()=>{
        // this keyword will never exist in arrow function
        console.log("Fruit name is ",this.fruitname)
    },
}

// calling totalCost function
obj1.totalCost();

// assigning totalCost function to a variable
// here when we call the function through variable, this function will be lost
let myNewFunc = obj1.totalCost;
myNewFunc();

// Using binding to preserve this function
let myNewFuncWithBind = obj1.totalCost.bind(obj1);
myNewFuncWithBind();


