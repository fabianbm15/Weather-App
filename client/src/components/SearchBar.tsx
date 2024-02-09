import axios from "axios";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { changeSearchedCities, setSearchedCity } from "../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import "./SearchBar.css";

const BACK = import.meta.env.VITE_BACK;

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchCity(e.target.value);
  };

  const handleSearch = async () => {
    if (searchCity?.length !== 0) {
      try {
        const response = await axios.get(`${BACK}/search?name=${searchCity}`);
        dispatch(changeSearchedCities(response.data));
        dispatch(setSearchedCity(searchCity));
        navigate("/search");
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  return (
    <Box className="boxSearchBar">
      <Box className="boxInputSearch" sx={{ borderRadius: "12px" }}>
        <TextField
          error={searchCity?.length === 0}
          className="inputSearch"
          label="Busca una nueva ciudad"
          variant="filled"
          sx={{ borderRadius: "12px", fontSize: { xs: "18px", md: "25px" } }}
          InputProps={{
            style: {
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              borderRadius: "12px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ width: { xs: "30px", md: "60px" }, height: { xs: "30px", md: "60px" } }} />
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        {searchCity?.length === 0 ? (
          <p className="pErrorSearchInput">Este campo no puede estar vacío.</p>
        ) : null}
      </Box>
      <Button className="buttonBuscar" variant="contained" onClick={handleSearch}>
        Buscar
      </Button>
    </Box>
  );
}
