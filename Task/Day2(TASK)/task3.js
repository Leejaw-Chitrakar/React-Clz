// Fix with .bind().

let obj1 ={
    fname: "Leejaw",
    lname: "Chitrakar",
    level: "Bachlor",
    displayInfo: function(){
        let fullname = this.fname + this.lname;
        console.log("Full name is ", fullname);
    }
};

let a = obj1.displayInfo.bind(obj1);
a();