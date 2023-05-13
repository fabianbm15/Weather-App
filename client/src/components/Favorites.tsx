import { Container, Typography, Box } from "@mui/material";
import "./Favorites.css";

export default function Favorites() {
   return (
      <Container>
         <Box className="boxFavoritesTitle">
            <Typography className="titleFavorites">Ciudades</Typography>
            <Typography
               className="titleFavorites"
               sx={{
                  fontWeight: "500",
               }}
            >
               Favoritas
            </Typography>
         </Box>
      </Container>
   );
}
