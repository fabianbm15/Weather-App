import { Container, Typography, Box } from "@mui/material";
import "./Favorites.css";
import Card from "./Card";

const data = [
   // Bucaramanga
   {
      coord: {
         lon: -73.1157,
         lat: 7.1173,
      },
      weather: [
         {
            id: 803,
            main: "Clouds",
            description: "muy nuboso",
            icon: "04d",
         },
      ],
      base: "stations",
      main: {
         temp: 22.88,
         feels_like: 23.26,
         temp_min: 22.88,
         temp_max: 22.88,
         pressure: 1016,
         humidity: 78,
      },
      visibility: 10000,
      wind: {
         speed: 4.63,
         deg: 180,
      },
      clouds: {
         all: 75,
      },
      dt: 1683985554,
      sys: {
         type: 1,
         id: 8581,
         country: "CO",
         sunrise: 1683974150,
         sunset: 1684018914,
      },
      timezone: -18000,
      id: 3688465,
      name: "Bucaramanga",
      cod: 200,
   },
   // Ocamonte
   {
      coord: {
         lon: -73.122,
         lat: 6.3407,
      },
      weather: [
         {
            id: 804,
            main: "Clouds",
            description: "nubes",
            icon: "04d",
         },
      ],
      base: "stations",
      main: {
         temp: 23.83,
         feels_like: 23.94,
         temp_min: 23.83,
         temp_max: 23.83,
         pressure: 1014,
         humidity: 64,
         sea_level: 1014,
         grnd_level: 858,
      },
      visibility: 10000,
      wind: {
         speed: 0.79,
         deg: 281,
         gust: 1.15,
      },
      clouds: {
         all: 91,
      },
      dt: 1683985619,
      sys: {
         country: "CO",
         sunrise: 1683974215,
         sunset: 1684018852,
      },
      timezone: -18000,
      id: 3686736,
      name: "Ocamonte",
      cod: 200,
   },
   // Charalá
   {
      coord: {
         lon: -73.1442,
         lat: 6.2855,
      },
      weather: [
         {
            id: 804,
            main: "Clouds",
            description: "nubes",
            icon: "04d",
         },
      ],
      base: "stations",
      main: {
         temp: 25.1,
         feels_like: 25.31,
         temp_min: 25.1,
         temp_max: 25.1,
         pressure: 1014,
         humidity: 63,
         sea_level: 1014,
         grnd_level: 877,
      },
      visibility: 10000,
      wind: {
         speed: 0.82,
         deg: 284,
         gust: 1.13,
      },
      clouds: {
         all: 90,
      },
      dt: 1683985698,
      sys: {
         country: "CO",
         sunrise: 1683974225,
         sunset: 1684018853,
      },
      timezone: -18000,
      id: 3686736,
      name: "Charalá",
      cod: 200,
   },
   {
      coord: {
         lon: -73.1157,
         lat: 7.1173,
      },
      weather: [
         {
            id: 803,
            main: "Clouds",
            description: "muy nuboso",
            icon: "04d",
         },
      ],
      base: "stations",
      main: {
         temp: 22.88,
         feels_like: 23.26,
         temp_min: 22.88,
         temp_max: 22.88,
         pressure: 1016,
         humidity: 78,
      },
      visibility: 10000,
      wind: {
         speed: 4.63,
         deg: 180,
      },
      clouds: {
         all: 75,
      },
      dt: 1683985554,
      sys: {
         type: 1,
         id: 8581,
         country: "CO",
         sunrise: 1683974150,
         sunset: 1684018914,
      },
      timezone: -18000,
      id: 3688465,
      name: "Bucaramanga",
      cod: 200,
   },
   {
      coord: {
         lon: -73.1157,
         lat: 7.1173,
      },
      weather: [
         {
            id: 803,
            main: "Clouds",
            description: "muy nuboso",
            icon: "04d",
         },
      ],
      base: "stations",
      main: {
         temp: 22.88,
         feels_like: 23.26,
         temp_min: 22.88,
         temp_max: 22.88,
         pressure: 1016,
         humidity: 78,
      },
      visibility: 10000,
      wind: {
         speed: 4.63,
         deg: 180,
      },
      clouds: {
         all: 75,
      },
      dt: 1683985554,
      sys: {
         type: 1,
         id: 8581,
         country: "CO",
         sunrise: 1683974150,
         sunset: 1684018914,
      },
      timezone: -18000,
      id: 3688465,
      name: "Bucaramanga",
      cod: 200,
   },
];

export default function Popular() {
   return (
      <Container sx={{ border: "1px solid red" }}>
         <Box className="boxFavoritesTitle">
            <Typography className="titleFavorites">Ciudades</Typography>
            <Typography
               className="titleFavorites"
               sx={{
                  fontWeight: "500",
               }}
            >
               Populares
            </Typography>
         </Box>
         <Box className="boxCards">
            {data.map((city) => {
               return <Card city={city} />;
            })}
         </Box>
      </Container>
   );
}
