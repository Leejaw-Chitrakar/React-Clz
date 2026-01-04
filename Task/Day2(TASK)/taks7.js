// Convert normal function to arrow and see difference

let add = (a,b)=>{ 
    return a+b;
}

function sub(a,b){
    return a-b;
}

console.log("Sum", add(5,3));
console.log("Difference", sub(6,4));