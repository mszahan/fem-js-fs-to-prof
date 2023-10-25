const person = [
    {name:'Alex', age:35},
    {name:'jenni', age:41},
    {name:'Eli', age:40},
    {name:'rebecca', age:27}
]


// filter creates array of the data that matches the logic

const filterPersons = person.filter(p => p.age < 40);
console.log(filterPersons);