const axios = require('axios')

const getLugarLatLng = async (dir) => {
    const encodedURL = encodeURI(dir) //convertir la direccion escrita en CMD a base64 para que pueda insertarse en la URL
    console.log(encodedURL)
    //Se instancia la peticion para solicitar el API KEY en los headers
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {'x-rapidapi-key':'32b145c25bmsh80ebb99daa098bcp1aab22jsn3c3a7542a754'}
    })
    
    const resp = await instance.get()
    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

      return { direccion, lat, lng }
}

module.exports = {
    getLugarLatLng
}
