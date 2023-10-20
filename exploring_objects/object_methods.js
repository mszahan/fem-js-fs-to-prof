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
    Num: function (){
        return (this.mobile)
    }

}

console.log('calling object functions', obj.Num());


// accessing objects within the array

const friends = [
    {name: 'Sojib', nickName:'Sojib'},
    {name: 'Alexandra', nickName:'Alex'},
    {name: 'Rebecca', nickName:'reb'}
]

console.log('nickname of Alexandra is ', friends[1].nickName);