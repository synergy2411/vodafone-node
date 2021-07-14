const axios = require("axios").default;

const getGeocode = (location) => {
  return new Promise((resolved, reject) => {
    axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`
      ).then((response) => {
            const lat = response.data.features[0].geometry.coordinates[0];
            const lng = response.data.features[0].geometry.coordinates[1];
            resolved({lat, lng})
      })
      .catch((err) => {
            reject(err);
      });
  });
};

module.exports = { getGeocode }
