// rest operator combines mutiple values in an array
// notation: ... 

// Functionma hunxa 

// example without using rest operator
let add = (a,b,c,d,e,f,g,h,i,j,k,l,m,n) => {
    return a+b+c+d+e+f+g+h+i+j+k+l+m+n;
}
console.log(add(1,2,3,4,5,6,7,8,9,10,11,12,13,14));

// example using rest operator

let addUsingRest = (...values) => {
    //Traditional way
    // let sum = 0; 
    // for(let i=0; i<values.length; i++){
    //     sum += values[i];
    // }
    // return sum;

    // Modern way
    return values.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    });

    // In simple word reduce loop values kati ota xa tatichoti run hunxa
}
// calling function
let resultUsingRest = addUsingRest(1,2,3,4,5,6,7,8,9,10,11,12,13,14);
console.log("Result using rest operator: ", resultUsingRest);

