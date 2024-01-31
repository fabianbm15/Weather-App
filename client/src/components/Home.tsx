import { Container } from "@mui/material";
import SearchBar from "./SearchBar";
import "./Home.css";
import Favorites from "./Favorites";
import Popular from "./Popular";

export default function Home() {
  return (
    <Container className="containerHome">
      {location.pathname !== "/popular" ? (
        <>
          <SearchBar />
          <Favorites />
        </>
      ) : null}

      <Popular />
    </Container>
  );
}
