import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { City } from "../types/city";
import Card from "./Card";
import { Container, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Popular.css";

const BACK = import.meta.env.VITE_BACK;

export default function Popular() {
  const navigate = useNavigate();
  const location = useLocation();
  const [popularCities, setPopularCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getPopularCities(): Promise<City[]> {
    console.log("ingresa a fucntion async");

    const response = await axios.get(`${BACK}/popular/`);
    setIsLoading(false);
    console.log("setIsLoading false y return");

    return response.data;
  }

  useEffect(() => {
    // setIsLoading(true);
    console.log("ingresa use effect");
    return () => {
      console.log("return");

      getPopularCities().then((data) => {
        setPopularCities(data);
        console.log("PopularCities", popularCities);
      });
    };
  }, []);

  return (
    <Container className="containerPopular">
      {location.pathname === "/popular" ? (
        <Button className="backButton" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          <Typography>Volver</Typography>
        </Button>
      ) : null}
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
