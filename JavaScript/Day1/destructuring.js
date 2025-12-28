// destructuring is the process of displaying just the values no the keys
let student = ["Hari", "Shyam","Shamba","Ram"];
// destructuring arrray
let[a,b,c,d,e] = student;
console.log(a,b,c,d,e);
// destructuring object
let obj = {
    name : "Hari",
    age : 28,
    address : "Pune",
    city : "Pune",
    state: "MH"
}

let {name , age ,city, address} = obj;
console.log(name,age,city,address);
