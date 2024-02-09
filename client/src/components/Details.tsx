import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { City } from "../types/city";
import Maps from "./Maps";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Details.css";

const BACK = import.meta.env.VITE_BACK;

export default function Details() {
  const navigate = useNavigate();
  const detailsCity = useAppSelector((state) => state.counter.detailsCity);
  const [noCity, setNoCity] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [city, setCity] = useState<City[]>([]);

  useEffect(() => {
    setIsLoading(true);
    async function getCityDetails() {
      try {
        const response = await axios.get(
          `${BACK}/search/lat-lon/?lat=${detailsCity[0].lat}&lon=${detailsCity[0].lon}`
        );
        setCity([response.data[0]]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    if (detailsCity.length !== 0) {
      getCityDetails().then(() => {
        setNoCity(false);
        setIsLoading(false);
      });
    } else {
      setNoCity(true);
      setIsLoading(false);
    }
  }, [detailsCity]);

  return (
    <Container className="containerDetails" style={{ display: "flex" }}>
      {isLoading ? (
        <Box className="containerSpinner">
          <div className="spinner"></div>
        </Box>
      ) : noCity ? (
        <Box>
          <Typography className="cityNameDetails" variant="h3">
            {`No se encontró la ciudad.`}
          </Typography>
        </Box>
      ) : (
        <Box className="containerData" style={{ display: "flex" }}>
          <Box className="boxDetailsInfo">
            <Button className="backButton" onClick={() => navigate("/")}>
              <ArrowBackIcon />
              <Typography>Volver</Typography>
            </Button>
            <Typography className="cityNameDetails" variant="h3">
              {`${city[0].name}, ${city[0].sys.country}`}
            </Typography>
            <Box className="iconAndWeather">
              <img
                className="imageDetails"
                src={`https://openweathermap.org/img/wn/${city[0].weather[0].icon}@2x.png`}
                alt="no image"
              />
              <Typography className="textTempDetails" variant="h4">{`${city[0].main.temp}°C`}</Typography>
              <Typography className="textInfoDetails" variant="h6">
                {`${
                  city[0].weather[0].description[0].toUpperCase() + city[0].weather[0].description.slice(1)
                }`}
              </Typography>
            </Box>
            <Box>
              <Typography className="textInfoDetails" variant="h6">
                {`Se siente como: ${city[0].main.feels_like}°C`}
              </Typography>
              <Typography className="textInfoDetails" variant="h6">
                {`Humedad: ${city[0].main.humidity}%`}
              </Typography>
              <Typography className="textInfoDetails" variant="h6">
                {`Presión: ${city[0].main.pressure}hPa`}
              </Typography>
              <Typography className="textInfoDetails" variant="h6">
                {`Visibilidad: ${city[0].visibility}m`}
              </Typography>
              <Typography className="textInfoDetails" variant="h6">
                {`Velocidad del viento: ${city[0].wind.speed}m/s`}
              </Typography>
            </Box>
          </Box>
          <Box className="boxDetailsMap">
            <Maps city={city[0]} />
          </Box>
        </Box>
      )}
    </Container>
  );
}
