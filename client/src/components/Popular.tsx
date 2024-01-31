import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";
import "./Favorites.css";
import Card from "./Card";
import { City } from "../interface/city";

let popularCitiesArray: City[] = [];

export default function Popular() {
  const [popularCities, setPopularCities] = useState<City[]>([]);

  async function getPopularCities(): Promise<City[]> {
    const response = await axios.get(`http://localhost:3000/popular/`);
    return response.data;
  }

  useEffect(() => {
    return () => {
      getPopularCities().then((data) => {
        setPopularCities(data);
      });
    };
  }, []);

  return (
    <Container sx={{ border: "1px solid red" }}>
      <Box className="boxFavoritesTitle">
        <Typography className="titleFavorites">Ciudades</Typography>
        <Typography
          className="titleFavorites"
          sx={{
            fontWeight: "500",
            marginLeft: "8px",
          }}
        >
          Populares
        </Typography>
      </Box>
      <Box className="boxCards">
        {popularCities.map((city: City, key: number) => {
          return <Card city={city} key={key} />;
        })}
      </Box>
    </Container>
  );
}
