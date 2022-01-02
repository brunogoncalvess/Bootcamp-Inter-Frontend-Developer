const getAdmins = (map) => {
    const administradores = [];

    for (chave of map) {
        if (chave[1] === 'admin') {
            administradores.push(chave[0])
        }
    }
    return administradores
}

const usuarios = new Map([['Luiz', 'admin'], ['Bruno', 'admin'], ['Gustavo', 'user'], ['Percival', 'user']])
console.log(getAdmins(usuarios))