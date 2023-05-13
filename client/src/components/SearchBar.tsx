import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

export default function SearchBar() {
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
            />
         </Box>

         <Button className="buttonBuscar" variant="contained">
            Buscar
         </Button>
      </Box>
   );
}
