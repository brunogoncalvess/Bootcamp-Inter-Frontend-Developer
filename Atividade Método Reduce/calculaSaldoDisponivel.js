const produtos = [
    {
        nome: 'sabao em po',
        preco: 30
    },
    {
        nome: 'arroz',
        preco: 20
    },
    {
        nome: 'carne',
        preco: 22
    }
];

const saldoInicial = 100

const saldoDisponivel = (arr, saldo) => {
    return arr.reduce((saldo, valor) => {
        return saldo - valor.preco
    }, saldo)
}

console.log(saldoDisponivel(produtos, saldoInicial))