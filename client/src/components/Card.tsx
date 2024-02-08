import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "./Card.css";
import { City } from "../types/city";
import { CityLocalStorage } from "../types/cityLocalStorage";
import { setItem, getItem } from "../utils/LocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../features/counter/counterSlice";
import { useEffect, useState } from "react";

interface CardProps {
  city: City;
}

export default function Card({ city }: CardProps) {
  const { name } = city;
  const { country } = city.sys;
  const { temp } = city.main;
  const { description } = city.weather[0];
  const { lat, lon } = city.coord;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites: CityLocalStorage[] = useSelector((state) => state.counter.favorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const bandera = favorites.findIndex(
      (c) =>
        String(c.lat).slice(0, 4) === String(lat).slice(0, 4) &&
        String(c.lon).slice(0, 4) === String(lon).slice(0, 4)
    );
    if (bandera === -1) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }, [city, favorites]);

  const handleFav = () => {
    const { lat, lon } = city.coord;
    const bandera = favorites.findIndex(
      (c) =>
        String(c.lat).slice(0, 4) === String(lat).slice(0, 4) &&
        String(c.lon).slice(0, 4) === String(lon).slice(0, 4)
    );
    if (bandera === -1) {
      dispatch(addFav({ name, lat, lon }));
    } else {
      dispatch(removeFav(city.coord));
    }
  };

  return (
    <Box className="boxCardName">
      <Box className="boxCard">
        <svg viewBox="0 0 24 24" className={isFavorite === true ? "svgFavoriteIcon" : "svgNonFavoriteIcon"}>
          <g>
            <g>
              <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
            </g>
          </g>
        </svg>
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
          <a className="detailsButtonHover" onClick={() => handleFav()}>
            {isFavorite ? "Eliminar Fav" : "Agregar Fav"}
          </a>
        </Box>
      </Box>
      <Typography className="nameCity">{`${name} (${country})`}</Typography>
    </Box>
  );
}
