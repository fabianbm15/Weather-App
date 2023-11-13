import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import "./Details.css"

export default function Details() {
  return (
    <Container className="containerDetails" style={{display: "flex"}}>
      <Box className="boxDetailsInfo">
        <Typography className="cityNameDetails" variant="h3">Ocamonte, Santander</Typography>
        <Box className="iconAndWeather">
          <img src="" alt="no image" />
          <Typography variant="h4">22 °C</Typography>
          <Typography className="textInfoDetails" variant="h6">Lluvia Ligera</Typography>
        </Box>
        <Box>
          <Typography className="textInfoDetails" variant="h6">Se siente como: </Typography>
          <Typography className="textInfoDetails" variant="h6">Humedad: </Typography>
          <Typography className="textInfoDetails" variant="h6">Presión </Typography>
          <Typography className="textInfoDetails" variant="h6">Visibilidad: </Typography>
          <Typography className="textInfoDetails" variant="h6">Velocidad del viento: </Typography>
        </Box>
      </Box>
      <Box className="boxDetailsMap">
        MAPA
      </Box>
    </Container>
  );
}
