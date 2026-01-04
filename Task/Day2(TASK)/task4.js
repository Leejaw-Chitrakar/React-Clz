// Create two objects and use the same method with .bind().

let obj1 ={
    fname: "Leejaw ",
    lname: "Chitrakar",
    displayInfo: function(){
        let fullname = this.fname + this.lname;
        console.log("Full name is ", fullname);
    }
};

let obj2 ={
    fname: "Samit ",
    lname: "Shrestha",
    displayInfo: function(){
        let fullname = this.fname + this.lname;
        console.log("Full name is ", fullname);
    }
};

let o1 = obj1.displayInfo.bind(obj1);
let o2 = obj2.displayInfo.bind(obj2);

o1();
o2();