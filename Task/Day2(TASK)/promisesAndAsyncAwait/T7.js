// Create function that returns promise.
let func = () => {
    return new Promise((resolve, reject) => {
        resolve("Promise resolved");
    })
}
func().then((result) => console.log(result))
    .catch((error) => console.log(error))

func();