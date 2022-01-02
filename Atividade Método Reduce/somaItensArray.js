const arr = [10, 1, 4, 5, 3, 20, 40, 17];

function soma(array) {
    return array.reduce((acumulador, valor) => {        
        return acumulador + valor        
    }, 0)
}

console.log(soma(arr))