const funcao = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') return 'Insira apenas números!'
    let valida;
    x === y ? valida = "são" : valida = "não são"
    const soma = x + y
    let maiorQue10;
    let maiorQue20;
    soma > 10 ? maiorQue10 = 'maior que' : maiorQue10 = 'menor que'
    soma > 20 ? maiorQue20 = 'maior que' : maiorQue20 = 'menor que'

    return `Os números ${x} e ${y} ${valida} iguais. Sua soma é ${soma}, que é ${maiorQue10} 10 e ${maiorQue20} 20.`
}

console.log(funcao(8, 10))
