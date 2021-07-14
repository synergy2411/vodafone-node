const axios = require("axios").default;

const getForecast = (lat,lng) => {
    return new Promise((resolved, reject) => {
        axios.get(`https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`)
            .then(response => {
                const temperature = response.data.currently.temperature
                const summary = response.data.daily.summary
                resolved({temperature, summary})
            }).catch(err => {
                reject(err)
            })
    })
}

module.exports = { getForecast }

// getForecast(77.21667, 28.66667).then(response => console.log(response)).catch(err => console.log(err))