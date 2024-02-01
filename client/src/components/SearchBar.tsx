import { Box, TextField, Button, InputAdornment } from "@mui/material";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
import { useState } from "react";
import { City } from "../interface/city";

export default function SearchBar() {
  const [searchCity, setSearchCity] = useState<string>();
  const handleChange = (e: any) => {
    setSearchCity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get<City[]>(`http://localhost:3000/search?name=${searchCity}`);
      console.log(response.data);
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

      <Button className="buttonBuscar" variant="contained" onClick={() => handleSearch()}>
        Buscar
      </Button>
    </Box>
  );
}
