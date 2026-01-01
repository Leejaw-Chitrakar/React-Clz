// export example

// Using Normal Export to single variable
export const PI = 3.1415;

// Default Export: Shoule be only ince in a file
let radius = 34.5;
export default radius;

// Exporting multiple variables at once
let x = 10;
let y = 20;
export {x,y};

// exporting a function
let calcAreaOfCircle = (radius) => {
    return PI * radius * radius;
}

let calcPerimeterOfCircle = (diameter) => {
    return PI * diameter;
}

export{calcAreaOfCircle,calcPerimeterOfCircle};
