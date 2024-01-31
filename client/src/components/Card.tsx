import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "./Card.css";
import { City } from "../interface/city";

interface CardProps {
  city: City;
}

export default function Card({ city }: CardProps) {
  const { name } = city;
  const { country } = city.sys;
  const { temp } = city.main;
  const { description } = city.weather[0];

  const navigate = useNavigate();
  return (
    <Box className="boxCardName">
      <Box className="boxCard">
        <Typography className="tempCard">{`${temp}°C`}</Typography>
        <img
          className="imageCard"
          src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt="no image"
        />
        <Typography className="tempDescription">{`${
          description[0].toUpperCase() + description.slice(1)
        }`}</Typography>
        <Box className="boxHoverDetails">
          <Typography className="nameCityHoverDetails">{`${name}`}</Typography>
          <a className="detailsButtonHover" onClick={() => navigate("/details", { state: { city } })}>
            Detalles
          </a>
        </Box>
      </Box>
      <Typography className="nameCity">{`${name} (${country})`}</Typography>
    </Box>
  );
}
