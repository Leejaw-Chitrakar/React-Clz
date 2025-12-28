console.log('Hello world!')

// var   : fundamental scope variable
// const : block scope variable
// let   : block scope variable

// Single threaded Operation

function Myfunction(){
    var a = 20;
    console.log('a = ' + a);
    // If Block
    if(true){
        var b = 40;
        console.log('b = ' + b);
    }
    console.log('Outside if Block: ', b) 
}
// Myfunction()
// console.log('Outside function: ', a);


// Block Scopoe Example
for (let i=0; i<3 ; i++){
    console.log('index = ' + i);
    const pi = 3.14; //pi is not defined because const is a block scope variable
}
// console.log('Value of pi = ' + pi);


