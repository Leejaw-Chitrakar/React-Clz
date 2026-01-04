// Call method from another variable and see undefined.

let obj1 ={
    fname: "Leejaw",
    lname: "Chitrakar",
    level: "Bachlor",
    displayInfo: function(){
        let fullname = this.fname + this.lname;
        console.log("Full name is ", fullname);
    }
};

var a = obj1.displayInfo;
a();