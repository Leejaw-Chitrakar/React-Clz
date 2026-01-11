// Create object with name and method using this.

let obj1 ={
    fname: "Leejaw",
    lname: "Chitrakar",
    level: "Bachlor",
    displayInfo: function(){
        let fullname = this.fname + this.lname;
        console.log("Full name is ", fullname);
    }
};

obj1.displayInfo();
