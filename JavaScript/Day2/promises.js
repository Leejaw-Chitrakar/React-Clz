// promises indicates future values (kinda like possibilities where you don't know the outcome)
// promise: represent to the future value
// it makes asynchronous programming easy
// resolve: promise will be fulfilled
// reject: promise will be rejected
// creating promise
let myPromise = new Promise(
    // callback function
    (resolve,reject)=>{
        let mailePromisePutaGary = true;
        if(mailePromisePutaGary){
            resolve("maile baacha kasam pura gary");
        }
        else{
            reject("I am sorry, maile kasam pura garna sakyna");
        }
    }
)

console.log("Before Promise")

// comsuming promise
// callback hell
myPromise.then(
    (result)=>{
        console.log(result);
    }
).catch(
    (error)=>{
        console.log("error: ",error);
    }
).finally(
    ()=>{
        console.log("Always finally called");
    }
)
console.log("After Promise")