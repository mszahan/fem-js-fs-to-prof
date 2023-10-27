const fav = [
    {name:'alex', age:35},
    {name:'Rebecca', age:28},
    {name:'Eli', age:40},
]

let {name, age} = fav[0]
console.log(name);
console.log(age)

// it doesn't have to be in order
//.... you can also do this way
// let {age, name} = fav[0] 

// you can't change the variable names
//.... it hase to be same as the object keys name
let {favName, favAge} = fav[1];
console.log(favName);
console.log(favAge);
