import { Container } from "@mui/material";
import SearchBar from "./SearchBar";
import "./Home.css";
import Favorites from "./Favorites";

export default function Home() {
   return (
      <Container className="containerHome">
         <SearchBar />
         <Favorites />
      </Container>
   );
}
