import axios from "axios";
import { useEffect, useState } from "react";
import { City } from "../types/city";
import Card from "./Card";
import { Container, Typography, Box } from "@mui/material";
import "./Popular.css";

const BACK = import.meta.env.VITE_BACK;

export default function Popular() {
  const [popularCities, setPopularCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getPopularCities(): Promise<City[]> {
    const response = await axios.get(`${BACK}/popular/`);
    setIsLoading(false);
    return response.data;
  }

  useEffect(() => {
    setIsLoading(true);
    return () => {
      getPopularCities().then((data) => {
        setPopularCities(data);
      });
    };
  }, []);

  return (
    <Container className="containerPopular">
      <Box className="boxPopularTitle">
        <Typography className="titlePopular">Ciudades</Typography>
        <Typography
          className="titlePopular"
          sx={{
            fontWeight: "500",
            marginLeft: "8px",
          }}
        >
          Populares
        </Typography>
      </Box>
      <Box className="boxCards">
        {isLoading ? (
          <Box className="containerSpinner">
            <div className="spinner"></div>
          </Box>
        ) : (
          popularCities.map((city: City, key: number) => {
            return <Card city={city} key={key} />;
          })
        )}
      </Box>
    </Container>
  );
}
