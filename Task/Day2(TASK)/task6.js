// Write function in strict mode and log this.
let add = (a,b)=>{ 
    console.log(this)
    return a+b;
}

function sub(a,b){
    console.log(this)
    return a-b;
}

console.log("Sum", add(5,3));
console.log("Difference", sub(6,4));
