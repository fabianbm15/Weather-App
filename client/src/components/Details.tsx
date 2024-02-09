import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Maps from "./Maps";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Details.css";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { city } = location.state || navigate("/");
  const { name } = city;
  const { country } = city.sys;
  const { temp } = city.main;
  const { description } = city.weather[0];
  const { feels_like } = city.main;
  const { humidity } = city.main;
  const { pressure } = city.main;
  const { visibility } = city;
  const { speed } = city.wind;

  return (
    <Container className="containerDetails" style={{ display: "flex" }}>
      <Box className="boxDetailsInfo">
        <Button className="backButton" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          <Typography>Volver</Typography>
        </Button>
        <Typography className="cityNameDetails" variant="h3">
          {`${name}, ${country}`}
        </Typography>
        <Box className="iconAndWeather">
          <img
            className="imageDetails"
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="no image"
          />
          <Typography className="textTempDetails" variant="h4">{`${temp}°C`}</Typography>
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
      <Box className="boxDetailsMap">
        <Maps city={city} />
      </Box>
    </Container>
  );
}
