import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchedCities, setSearchedCity } from "../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchCity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/search?name=${searchCity}`);
      dispatch(changeSearchedCities(response.data));
      dispatch(setSearchedCity(searchCity));
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="boxSearchBar">
      <Box className="boxInputSearch" sx={{ borderRadius: "12px" }}>
        <TextField
          className="inputSearch"
          label="Busca una nueva ciudad"
          variant="filled"
          sx={{ borderRadius: "12px" }}
          InputProps={{
            style: {
              height: "100px",
              fontSize: "25px",
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              borderRadius: "12px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ width: "60px", height: "60px" }} />
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleChange(e)}
        />
      </Box>

      <Button className="buttonBuscar" variant="contained" onClick={handleSearch}>
        Buscar
      </Button>
    </Box>
  );
}
