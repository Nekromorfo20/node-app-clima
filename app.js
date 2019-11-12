const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const getInfo = async (direccion) => {
    try {
        const respLugar = await lugar.getLugarLatLng(direccion)
        const respClima = await clima.getclima(respLugar.lat, respLugar.lng)
        return `El clima de ${respLugar.direccion} es de ${respClima}`
    } catch (error){
        return `No se pudo encontrar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log)
