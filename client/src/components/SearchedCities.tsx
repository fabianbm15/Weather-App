import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeSearchedCities } from "../features/counter/counterSlice";
import Card from "./Card";
import { City } from "../types/city";
import { Container, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./SearchedCities.css";

export default function SearchedCities() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchedCity = useSelector((state) => state.counter.searchedCity);
  const searchedCities: City[] = useSelector((state) => state.counter.searchedCities);
  const [searchedCityLocal, setSearchedCityLocal] = useState<string>("");

  useEffect(() => {
    return () => {
      setSearchedCityLocal(searchedCity);
    };
  }, [searchedCity]);

  useEffect(() => {
    if (searchedCities.length === 0) {
      const handleSearch = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/search?name=${searchedCity[0]}`);
          dispatch(changeSearchedCities(response.data));
        } catch (error) {
          console.log(error);
        }
      };
      handleSearch();
    }
  }, [searchedCityLocal]);

  return (
    <Container className="containerSearched">
      <Button className="backButton" onClick={() => navigate("/")}>
        <ArrowBackIcon />
        <Typography>Volver</Typography>
      </Button>
      <Box className="boxSearchedTitle">
        <Typography className="titleSearched">{`Resultados de búsqueda: `}</Typography>
        <Typography
          className="titleSearched"
          sx={{
            fontWeight: "500",
            marginLeft: "8px",
          }}
        >
          {searchedCity[0][0].toUpperCase() + searchedCity[0].slice(1)}
        </Typography>
      </Box>
      <Box className="boxCards">
        {searchedCities.map((city: City, key: number) => {
          return <Card city={city} key={key} />;
        })}
      </Box>
    </Container>
  );
}
