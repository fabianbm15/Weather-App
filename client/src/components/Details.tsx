import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./Details.css";

export default function Details() {
  const location = useLocation();
  const { city } = location.state;
  const { name } = city;
  const { country } = city.sys;
  const { temp } = city.main;
  const { description } = city.weather[0];
  const { feels_like } = city.main;
  const { humidity } = city.main;
  const { pressure } = city.main;
  const { visibility } = city;
  const { speed } = city.wind;
  const { lat, lon } = city.coord;

  return (
    <Container className="containerDetails" style={{ display: "flex" }}>
      <Box className="boxDetailsInfo">
        <Typography className="cityNameDetails" variant="h3">
          {`${name}, ${country}`}
        </Typography>
        <Box className="iconAndWeather">
          <img
            className="imageDetails"
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="no image"
          />
          <Typography variant="h4">{`${temp}°C`}</Typography>
          <Typography className="textInfoDetails" variant="h6">
            {`${description[0].toUpperCase() + description.slice(1)}`}
          </Typography>
        </Box>
        <Box>
          <Typography className="textInfoDetails" variant="h6">
            {`Se siente como: ${feels_like}°C`}
          </Typography>
          <Typography className="textInfoDetails" variant="h6">
            {`Humedad: ${humidity}%`}
          </Typography>
          <Typography className="textInfoDetails" variant="h6">
            {`Presión: ${pressure}hPa`}
          </Typography>
          <Typography className="textInfoDetails" variant="h6">
            {`Visibilidad: ${visibility}m`}
          </Typography>
          <Typography className="textInfoDetails" variant="h6">
            {`Velocidad del viento: ${speed}m/s`}
          </Typography>
        </Box>
      </Box>
      <Box className="boxDetailsMap">MAPA</Box>
    </Container>
  );
}
