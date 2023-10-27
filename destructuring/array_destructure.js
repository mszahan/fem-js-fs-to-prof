const ages = [27, 28, 35, 38, 40, 41]
let [alex, rebcca, eli] = ages;
console.log(alex);
console.log(rebcca);
console.log(eli);

//skipping with comma
let [,roma,, hola, vola] = ages;
console.log(roma);
console.log(hola);
console.log(vola);

// destructuring with spread operator
let [sojib, ...sarwar] = ages;
console.log(sojib);
console.log(typeof(sojib));
console.log(sarwar);
console.log(typeof(sarwar));
