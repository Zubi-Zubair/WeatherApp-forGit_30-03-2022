console.log('Loading Client-side JavaScript')

//var fetchWeather = "/weather";

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value
    console.log("location:" +location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    //const locationApi = fetchWeather + "?address=" + search.value;

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                console.log(data)
                messageOne.textContent = data.forecast.current.temperature
                messageTwo.textContent = data.forecast.location.name
                // messageTwo.textContent = data.current.temperature
                // messageOne.textContent = data.location
                // messageTwo.textContent = data.forecast
            }
        })
    })
})
    
    // fetch(locationApi).then(response => {
    //     response.json().then(data => {
    //         if(data.error) {
    //             locationElement.textContent = data.error;
    //             messageOne.textContent = "";
    //             messageTwo.textContent = "";
    //             } 
    //             else {
    //                 messageOne.textContent = 'City is: ' +data.cityName;
    //                 messageTwo.textContent = 'The Temperature is: ' + (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176)
    //                 // locationElement.textContent ='City: ' + data.cityName;
    //                 // tempElement.textContent = (data.temperature - 273.5).toFixed(2) + String.fromCharCode(176);
    //                 // weatherCondition.textContent = 'Weather Condition: ' + data.description;
    //                 // humidityElement.textContent = 'Humidity: ' + data.humidity;
    //                 weatherForm.reset();
    //             }
    //         }) 
    //     });
//})