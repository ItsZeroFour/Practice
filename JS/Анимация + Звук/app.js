// Включение анимации по нажатию на чекбокс
const header = document.querySelector('.site-header')
const snowman = document.querySelector('.snowman')

// При нажатии на снеговика будет играть песня
function scraySound() {
    const audio = new Audio()
    audio.preload = 'auto'
    audio.src = './sound/Home.mp3'
    audio.play()
}

snowman.onclick = scraySound

document.querySelector('.NewYear-on').onchange =
function() {
    if (this.checked) {
        header.classList.add('site-header-bg')
        snowman.classList.add('snowman-animation')
    } else {
        header.classList.remove('site-header-bg')
        snowman.classList.remove('snowman-animation')
    }
}