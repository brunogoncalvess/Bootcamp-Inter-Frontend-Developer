function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: 'Bruno',
    idade: 27,
}


console.log(calculaIdade.call(pessoa, 3))
console.log(calculaIdade.apply(pessoa, [2]))
