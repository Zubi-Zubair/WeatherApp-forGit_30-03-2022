const request = require('request')

const chk_w = (cityName, callback) => {
    // const url = 'https://api.darksky.net/forecast/apikey/' + latitude + ',' + longitude
    const access_key = 'b31d78ebc1d9718dc9a46ac8ef3eb2a4'

const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + cityName + '&units='

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(body)
            callback(undefined, body)
        }
    })
}

module.exports = {chk_w : chk_w}

// const request = require('request')
// const contants = require('./config')

// const forecast = (address, callback) => {
//     //const url  = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + `&appid=` + constants.openWeatherMap.SECRET_KEY
//     //const API_key = ''
//     //const url = ''
//     const url  = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + `&appid=` + constants.openWeatherMap.SECRET_KEY


// request({url,json:true},(error,{body})=>{
//     // console.log(body)
//     if(error){
//         callback(`Can't fetch the data`,undefined)
//     } else {
//         callback(undefined, {
//            temperature: body.main.temp,
//            description: body.weather[0].description,
//            cityName:body.name,
//            humidity:body.main.humidity
//         })
//     }
// })
// }

// module.exports = forecast;