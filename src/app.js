const path = require('path')
const express = require('express')
const hbs = require('hbs')
// const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT||3002

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather_App',
        username: 'Zubi'
    })
})

app.get('/weather', (req, res) => {
    console.log('City: '+ req.query.address)
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    forecast.chk_w(req.query.address, (error, forecastData)=>{
        console.log(forecastData)
        if(error){
            return res.send({error})
        }
        res.send(
            {
                forecast: forecastData,
                address: req.query.address
            })
    })

    // geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    //     if (error) {
    //         return res.send({ error })
    //     }

    //     forecast(latitude, longitude, (error, forecastData) => {
    //         if (error) {
    //             return res.send({ error })
    //         }

    //         res.send({
    //             forecast: forecastData,
    //             location,
    //             address: req.query.address
    //         })
    //     })
    // })
})

// app.get('/weather', (req,res) => {
//     const address = req.query.address

//     if(!address){
//         return res.send({
//             error: "Please enter a location to search weather"
//         })
//     }
//    forecast(address,(error, {temperature, description,cityName,humidity}) => {
//        if(error){
//            return res.send({
//                error
//            })
//        } 
//        console.log(temperature,description,cityName,humidity)
//        res.send({
//             cityName,
//             temperature,
//             cityName,
//        })
//    })
// })


app.get('*', (req, res)=>{
    res.render('404', {
        title:'404',
        username: 'Zubi',
        errorMessage: 'Page not found'
    })
})

app.listen(port, ()=>{
    console.log('Server Started on port number '+port)
})