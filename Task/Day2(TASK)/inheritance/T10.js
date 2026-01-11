// Create multiple child classes.

class parent {
    constructor() {
        this.name = "parent";
    }
}

class child1 extends parent {
    constructor() {
        super();
        this.name = "child1";
    }
}

class child2 extends parent {
    constructor() {
        super();
        this.name = "child2";
    }
}

class child3 extends parent {
    constructor() {
        super();
        this.name = "child3";
    }
}

let p = new parent();
let c1 = new child1();
let c2 = new child2();
let c3 = new child3();

console.log(p.name);
console.log(c1.name);
console.log(c2.name);
console.log(c3.name);
