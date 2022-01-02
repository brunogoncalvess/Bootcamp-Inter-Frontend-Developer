const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pairs = [];

function pairNumbers(array) {    
    array.filter((valor) => {
        if (valor % 2 === 0) {
            pairs.push(valor)
        }
    })
    console.log(pairs)
}

pairNumbers(nums)


/////////////////



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pairs = [];

function pairNumbers(array) {    
    return array.filter((valor) => {
        if (valor % 2 === 0) {
            return valor
        }
    })    
}

console.log(pairNumbers(nums))