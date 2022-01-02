const laranja = {
    value: 2,
};

const banana = {
    value: 3,
};

function multiplica(array, thisArg) {
    return array.map(function (item) {       
        return item * this.value
    }, thisArg)
}

const arr = [1, 2, 3];
console.log(multiplica(arr, laranja))
console.log(multiplica(arr, banana))