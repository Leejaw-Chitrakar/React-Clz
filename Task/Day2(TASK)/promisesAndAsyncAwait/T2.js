// Create promise that rejects.
let date = false;
let promise = new Promise((resolve, reject) => {
    if (date) {
        resolve("Promise resolved");
    }
    else {
        reject("Promise rejected");
    }
})
promise.then((result) => console.log(result))
    .catch((error) => console.log(error));
