const person = [
    {name:'Alex', age:35},
    {name:'jenni', age:41},
    {name:'Eli', age:40},
    {name:'rebecca', age:27}
]

// using map function to create another array
const ageOfAll = person.map(p => p.age);
console.log(ageOfAll);