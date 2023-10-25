function mainFunc(num){
    return num * 5;
}
// implementing same thing in arrow function with one parameter
const arrowMultiply = num => num*5;

// if two parameter is there
const twoParameter = (num, mult) => num*mult;

// if there are multiple lines then use return
const multiLines = (num, mult) => {
    console.log(`The number is ${num} and multiplicaiton value ${mult}`);
    return num*mult;
}

console.log(arrowMultiply(5));
console.log(twoParameter(5, 4));
console.log(multiLines(5,7));