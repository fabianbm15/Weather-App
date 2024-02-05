import axios from "axios";
import Card from "./Card";
import { City } from "../interface/city";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchedCities } from "../features/counter/counterSlice";
import { Container, Typography, Box } from "@mui/material";
import "./SearchedCities.css";

export default function SearchedCities() {
  const dispatch = useDispatch();
  const searchedCity = useSelector((state) => state.counter.searchedCity);
  const searchedCities: City[] = useSelector((state) => state.counter.searchedCities);
  const [searchedCityLocal, setSearchedCityLocal] = useState<string>("");

  useEffect(() => {
    console.log(searchedCity);
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
