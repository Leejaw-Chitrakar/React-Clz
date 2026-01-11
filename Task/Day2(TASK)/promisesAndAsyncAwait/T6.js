// Wait 2 seconds using setTimeout promise.
// here setTimeout is used to wait for 2 seconds
let date = true;
let convertToAsyncAwait = async () => {
    try {
        if (date) {
            setTimeout(() => console.log("Promise resolved"), 2000)
        }
        else {
            setTimeout(() => console.log("Promise rejected"), 2000)
        }
    } catch (error) {
        setTimeout(() => console.log("Something went wrong"), 2000)
    }
}
console.log("Before Promise");
convertToAsyncAwait();
console.log("After Promise");
