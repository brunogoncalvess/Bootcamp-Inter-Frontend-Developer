const body = document.querySelector('.body')
const h1 = document.getElementById('page-title')
const botao = document.getElementById('mode-selector')
const footer = document.querySelector('.footer')

const trocaCores = () => {
    body.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    botao.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}


const trocaTextos = () => {
    if (h1.classList.contains('dark-mode')) {
        h1.innerHTML = `Dark Mode ON`
    } else {
        h1.innerHTML = `Light Mode ON`
    }

    if (botao.classList.contains('dark-mode')) {
        botao.innerHTML = `Light Mode`
    } else {
        botao.innerHTML = `Dark Mode`
    }
}

botao.addEventListener('click', () => {
    trocaCores();
    trocaTextos();
})