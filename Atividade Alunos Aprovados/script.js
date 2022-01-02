const listaDeAprovados = []

const retornaAprovados = (alunos, media) => {
    for (valor in alunos) {
        if (alunos[valor].nota >= media) {
            listaDeAprovados.push(alunos[valor].nome)
        }
    }
}


const estudantes = [{nome: 'Bruno', nota: 9}, {nome: 'José', nota: 7}, {nome: 'Igor', nota: 5}, {nome: 'Guilherme', nota: 3}];

retornaAprovados(estudantes, 7)
console.log(listaDeAprovados)

// Solução usando object distructuring

const listaDeAprovados = []

const retornaAprovados = (alunos, media) => {
    for (valor in alunos) {
        const {nome, nota} = alunos[valor]
        if (nota >= media) {
            listaDeAprovados.push(nome)
        }
    }
}


const estudantes = [{nome: 'Bruno', nota: 9}, {nome: 'José', nota: 7}, {nome: 'Igor', nota: 5}, {nome: 'Guilherme', nota: 3}];

retornaAprovados(estudantes, 7)
console.log(listaDeAprovados)
