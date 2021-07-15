const express = require("express");
const { getForecast } = require("./utils/forecast")
const { getGeocode } = require("./utils/geocode")

const app = express();

const PORT = process.env.PORT || 3030

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/address", async (req, res) => {
    const { location } = req.query;
    try{
        const { lat, lng } =  await getGeocode(location)
        try{
            const { temperature, summary } = await getForecast(lat, lng)
            return res.send({temperature, summary, location})
        }catch(err){
            return res.send({message : "Unable to fetch from Darksky", err})
        }
    }catch(err){
        return res.send({message : "Unable to fetch from Mapbox Server", err})
    }
})

app.listen(PORT, () => console.log("Server started at PORT : ", PORT))