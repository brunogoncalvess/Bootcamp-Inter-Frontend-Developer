const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const buttun = document.getElementById('change-cat')

const getCat = async () => {
    const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e));

    return data.webpurl
}

const loadImg = async () => {
    const catImg = document.getElementById('cat')
    catImg.src = await getCat();
}

buttun.addEventListener('click', loadImg)

loadImg()