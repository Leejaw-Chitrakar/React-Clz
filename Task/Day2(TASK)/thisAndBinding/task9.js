// Use .call() to borrow method.
let person = {
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

let user = {
    firstName: "Leejaw",
    lastName: "Chitrakar"
};

console.log(person.fullName.call(user));
