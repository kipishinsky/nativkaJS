const rp = require('request-promise') // подключаем модуль

module.exports = async function(city = '') {
    if(!city) {
        throw new Error ('Имя города не может быть пустым')
    }
    console.log('city: ', city)
}