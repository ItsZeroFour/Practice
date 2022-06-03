// Генерация рандомного числа
function randomInteger(min, max) {
    let rand = min + Math.random()*(max + 1 - min)
    return Math.floor(rand)
}

function scrollPage() {
    let rand = randomInteger(1, 3)
    console.log(rand);
    let section = document.querySelector('#section-' + rand)            //  Делаем рандомную подставку числа для ID
    section.scrollIntoView({behavior: 'smooth'})                        //  Прокрутка страницы при обновлении
}

localStorage.setItem('scroll', 1)

if (localStorage.getItem('scroll')) {
    scrollPage()
}
