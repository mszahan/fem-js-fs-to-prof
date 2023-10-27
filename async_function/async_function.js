async function fetchResponse(url) {
    let response = await fetch(url);
    let body = await response.json();
    // return is not working it's returning the promise
    return body;
}

// to get the response you need to use await here as well
// ... but you can't use await here in js code
// ... there must be some other ways
let resp = fetchResponse('https://dog.ceo/api/breed/hound/list');
console.log(resp)