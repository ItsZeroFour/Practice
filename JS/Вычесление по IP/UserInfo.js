console.log('Оператор заблокирован');

class Userinfo {
    constructor() {
        this.timeOpened = new Date()
        this.timezone = (new Date()).getTimezoneOffset()/60
    }
    pageon() {
        // File location
        return window.location.pathname
    }
    referrer() {
        // Откудо переходил пользователь
        return document.referrer
    }
    // Сколько прошел сайтов до того, как попал к нам
    previousSites() {
        return history.length
    }
    browserInfo(){return navigator}
    // Информация о Cookies файлах
    dataCookies(){return decodeURIComponent(document.cookie.split(';'))}

    dataScreen() {
        return {
            with: screen.width,
            height: screen.height,
            clientWidth: document.body.clientWidth,
            clientHight: document.body.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            screenAvailWidth: screen.availWidth,
            screenAvailHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth
        }
    }
    // Геолокация
    async position() {
        const pos = await new Promise((resolve,
            reject) => {
                navigator.geolocation.getCurrentPosition
                (resolve, reject)
            });
            return {
                long: pos.coords.longitube,
                lat: pos.coords.latitube,
                accuracy: pos.coords.accuracy,
                altitube: pos.coords.altitube,
                heading: pos.coords.heading,
                speed: pos.coords.speed,
                timestamp: pos.timestamp,
            }
    }
    // Состояние батареи
    async battery() {
        return await navigator.getBattery()
    }
    // Вычесление по IP
    async ip() {
        let res = await (await fetch('https://api.db-ip.com/v2/free/self'))
        let data = await res.json()
        return data
    }
}