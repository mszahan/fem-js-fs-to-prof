const obj = {
    name:'Sarwar',
    age:27,
    familyMembers: ['alex', 'rebecca', 'dakota'],
    mobile: 007513890,
    village: 'nashvile',
    unmarried: false,
    marks: {
        math: 95,
        English: 75,
        Physics: 88,
    },

}


// console.log('mobile number: ', obj.mobile)
// console.log('first value of familyMember', obj.familyMembers[0])
// console.log('Marks of physics is', obj.marks.Physics )

// changing existing property values
obj.mobile = 1234567
console.log('the object after changing the mobile', obj)

// adding new property
obj.varsity = 'BSMRSTU'
console.log('after adding new property varsity', obj)

console.log('type of property value age', typeof(obj.age))
console.log('call the property in python way', obj['mobile'])