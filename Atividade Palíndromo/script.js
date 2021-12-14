const verificaPalindromo = palvra => {
    const palavra = palvra
    const arrayPalavra = palavra.split("")
    const palavraInvertida = arrayPalavra.reverse().join("")    
    let resultado;
    
    palavraInvertida === palavra ? resultado = `é palíndromo` : resultado = `não é palíndormo`

    return `${palvra} ${resultado}`
}

console.log(verificaPalindromo('ama'))
console.log(verificaPalindromo('bruno'))