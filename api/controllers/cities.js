const axios = require("axios");
const { search } = require("../routes");
require("dotenv").config();
let searchedCitiesName = [];
let searchedCitiesLatLon = [];
let popularCities = {
  buenosAires: { lat: "-34.61315", lon: "-58.37723" }, // OK
  santiagoDeChile: { lat: "-33.45694", lon: "-70.64827" }, // OK
  bogota: { lat: "4.60971", lon: "-74.08175" }, // OK
  quito: { lat: "-0.2201641", lon: "-78.5123274" }, // OK
  asuncion: { lat: "-25.2800459", lon: "-57.6343814" }, // OK
  lima: { lat: "-12.04318", lon: "-77.02824" }, // OK
  montevideo: { lat: "-34.8032784", lon: "-56.1881599" },
  caracas: { lat: "10.48801", lon: "-66.87919" },
};

let popularCitiesArray = [];

const appid = process.env.APPID;

function removeAccents(text) {
  if (text.length && isNaN(text)) {
    return text
      .normalize("NFD")
      .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
      .normalize()
      .toLowerCase()
      .replaceAll("ñ", "n");
  } else {
    return false;
  }
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
  getPopularCities: async function (req, res) {
    try {
      const citiesOrder = Object.keys(popularCities);
      popularCitiesArray = [];
      popularCitiesArray = await Promise.all(
        citiesOrder.map(async (key) => {
          const lat = popularCities[key].lat;
          const lon = popularCities[key].lon;
          const units = "metric";
          const lang = "es";

          const data = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${lang}`
          );

          return data.data;
        })
      );

      res.json(popularCitiesArray);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCityByName: async (req, res) => {
    searchedCitiesName = [];
    searchedCitiesLatLon = [];
    console.log(req.query.name);
    const name = removeAccents(req.query.name);
    if (name) {
      // Params para la API
      const limit = 10;
      const units = "metric";
      const lang = "es";

      try {
        // Hacer la petición a la API
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${limit}&appid=${appid}`
        );
        if (response.data.length === 0) {
          return res.status(200).json({
            message: "No se encontraron ciudades con este nombre.",
            data: [],
          });
        } else {
          // Eliminar duplicados
          removeDuplicateCities(response.data);

          try {
            await Promise.all(
              searchedCitiesName.map(async (e) => {
                const lat = e.lat;
                const lon = e.lon;
                const response2 = await axios.get(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${lang}`
                );
                searchedCitiesLatLon.push(response2.data);
              })
            );
            res.json(searchedCitiesLatLon);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        }
      } catch (error) {
        // Enviar el error al usuario
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(200).json({
        message: "Ingrese una ciudad válida.",
        data: [],
      });
    }
  },
  getCityByLatLon: async function (req, res) {
    searchedCitiesLatLon = [];
    const units = "metric";
    const lang = "es";

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
      res.json(searchedCitiesLatLon);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
