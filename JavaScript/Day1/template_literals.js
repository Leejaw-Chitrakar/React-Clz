// Template Literal or string interpolation
// It  defines how  to embed the valuse of variables in the string
// syntax : `string ${variable}`
let myname = 'Leejaw Chitrakar';
let myage = 19;
// Traditional Method
console.log('My name is ' + myname + ' and I am ' + myage + ' years old.');
// Template Literal
let myOriginamEmbadedString = `My name is ${myname} and I am ${myage} years old.`;
console.log(`Using TL: ${myOriginamEmbadedString}`);
