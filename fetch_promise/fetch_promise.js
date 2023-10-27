// it returns promise with pending state
// const dog = fetch('https://dog.ceo/api/breed/hound/list');
// console.log(dog)



// working on browser bring some response but not the actual data
//...... but showing sytax error in terminal
// let response = await fetch('https://dog.ceo/api/breed/hound/list');
// console.log(response.json())



// to avoid the sytax error you have to use await in async function
async function dog(){
    // it returns pending promise so used await to make it fulfiled
    let response = await fetch('https://dog.ceo/api/breed/hound/list');
    // this also returns peding promise to make it work you need await
    let body = await response.json()
    console.log(body)
}

dog();