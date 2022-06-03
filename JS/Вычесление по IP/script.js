// Узнаем расположение файла
let info = new Userinfo();

async function t1() {
    console.log(info.pageon());                     //  Расположение файла
    console.log(info.referrer());                   //  Откудо переходил пользователь
    console.log(info.previousSites());              //  Сколько песетил сайтов
    console.log(info.browserInfo());                //  Информация браузера
    console.log(info.dataCookies());                //  Информация о Cookies
    console.log(info.dataScreen());                 //  Информация о размерах экрана и т.п.
    // console.log(info.position())                 //  Геолокация
    console.log(info.battery());                    //  Состояние батареи
    console.log(info.ip());                         //  Вычесление по IP
}

t1()