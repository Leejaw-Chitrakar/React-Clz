let person = {
    fullName: function (city, country) {
        return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
    }
};

let user = {
    firstName: "Leejaw",
    lastName: "Chitrakar"
};

let result = person.fullName.apply(user, ["Kathmandu", "Nepal"]);
console.log(result);