// Call parent method using super().
class student {
    constructor() {
        this.marks = 80;
    }
}

class programmer extends student {
    constructor() {
        super();
    }
}

let p = new programmer();
console.log(p.marks);