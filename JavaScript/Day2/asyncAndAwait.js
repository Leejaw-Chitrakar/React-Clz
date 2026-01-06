// async and await solve the problem of call back hell and next code look line synchronous code
// async makes a function to retuen a promise
// await makes a function wait for a promise

let fetchUsers = async() => {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let result = await response.json();
        console.log("user:",result);
    }catch(error){
        console.log("Something went wrong");
    }finally{
        console.log("This is always called");
    }
}
console.log("Feathing user........")
fetchUsers();
console.log("After fetching user");