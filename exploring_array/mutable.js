let leters = ['b', 'c', 'a',]
let animals = ['linons', 'tiger', 'dog', 'cat']
let indent = [[1, 2, 3], ['a', 'b', 'c'], ['alex', 'rebeca', 'dakota']]
let nuum = [1, 3, 4, 5, 'zahan']
let noom = [33, 44, 55]

const main = [1, 3, 4, 5, 'zahan']
const mian_mutate = main;


let nuum_mutate = nuum;

// so basically push or pop gives you the index if you console log them
// let nuum_push = nuum.push(4)
// console.log('after pushing previous', nuum)
// console.log('after pushing new num_push', nuum_push)
// console.log(typeof(nuum_push))
// console.log('------------')
// let noom_concat = noom.concat([4])
// console.log('conacting in noom previous', noom)
// console.log('the new noom_concat', noom_concat)

nuum[0] = 'Sojib';
console.log('nuum after the mutation :', nuum)
console.log('numm_mutate after mutating nuum :', nuum_mutate)

main[0] = 'sarwar'
console.log('main after mutate', main);
console.log('main_muate after mutating the main', mian_mutate);
