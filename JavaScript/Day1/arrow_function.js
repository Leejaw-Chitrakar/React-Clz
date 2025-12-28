// arroe function or anonymous function
// the function without name
// syntax : () => {}

// Dynamically types variables
// all variables made with let, const and var is always the dynamically types variables
// Dynamically types means: the variable made with let, const and var 
// doesnot have its type so its type is deifned by what type of date us given
let display = () => {
    console.log('Hello world!');
}

// fucntion call
display()

// Inline or sinfle line arrow function
let add =(a,b) => a+b;
let aresult = add(100,20)
console.log(`The resule of the operation is ${aresult}.`);

// Multi line arrow function
let divide = (a,b) => {
    if(b==0){
            return 'Infinity'
    }
    return a/b;
}

let dresult1 = divide(100,0)
console.log(`The result of the operation is ${dresult1}.`);

let dresult2 = divide(100,20)
console.log(`The result of the operation is ${dresult2}.`);