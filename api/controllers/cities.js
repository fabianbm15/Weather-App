const axios = require("axios");
const { search } = require("../routes");
require("dotenv").config();
let searchedCitiesName = [];
let searchedCitiesLatLon = [];

function removeAccents(text) {
  return text
    .normalize("NFD")
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
    .normalize()
    .toLowerCase()
    .replaceAll("ñ", "n");
}

function removeDuplicateCities(cities) {
  for (let index = 0; index < cities.length; index++) {
    if (searchedCitiesName.length === 0) {
      searchedCitiesName.push(cities[index]);
    } else if (
      searchedCitiesName.findIndex(
        (element) => element.country === cities[index].country && element.state === cities[index].state
      )
    ) {
      searchedCitiesName.push(cities[index]);
    }
  }
}

module.exports = {
  getCityByName: async (req, res) => {
    const name = removeAccents(req.body.name);
    // Params para la API
    const limit = 10;
    const appid = process.env.APPID;
    const units = "metric";
    const lang = "es";

    try {
      // Hacer la petición a la API
      const data = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${limit}&appid=${appid}`
      );
      // Eliminar duplicados
      removeDuplicateCities(data.data);

      try {
        await Promise.all(
          searchedCitiesName.map(async (e) => {
            const lat = e.lat;
            const lon = e.lon;
            const data = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${lang}`
            );
            searchedCitiesLatLon.push(data.data);
          })
        );
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

      res.json(searchedCitiesLatLon);
    } catch (error) {
      // Enviar el error al usuario
      res.status(500).json({ error: error.message });
    }
  },
};
