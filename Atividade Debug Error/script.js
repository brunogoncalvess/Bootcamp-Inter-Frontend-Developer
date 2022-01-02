const recebeArray = (arr, num) => {
    try {
        if (!arr || !num) {
            throw new ReferenceError('Parâmetro não enviado')
        } else if (typeof arr !== 'object') {
            throw new TypeError('Primeiro parâmetro não é um array')
        } else if (typeof num !== 'number') {
            throw new TypeError('Segundo parâmetro não um número')
        } else if (arr.length !== num) {
            throw new RangeError('Tamanho do array é diferente do número')
        }

        return `Não houve nenhum erro. Array: ${arr}`
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este é um ReferenceError')
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log('Este é um TypeError')
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log('Este é um RangeError')
            console.log(e.name)
            console.log(e.stack)
        }
    }
}

const arr = [1, 2, 3, 4]
const num = 4

console.log(recebeArray(arr, num))

