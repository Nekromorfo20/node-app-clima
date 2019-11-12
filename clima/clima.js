const axios = require('axios')

const getclima = async (lat, lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3352457e69050af3decbf682b4ba30d&units=metric`)
    return respuesta.data.main.temp
}

module.exports = {
    getclima
}