import { useNavigate } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import NavBar from "./NavBar";
import Footer from "./Footer";
import image from "../assets/storm.webp";
import "./Error404.css";

export default function Popular() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Container className="containerError404">
        <Box className="boxInfoImage">
          <Box>
            <Typography className="titleError">Oops!</Typography>
            <Typography className="textError">Error 404 - Page not be found</Typography>
          </Box>
          <Box>
            <img className="imageErrorStorm" src={image} alt="storm image" />
          </Box>
        </Box>
        <Button className="buttonHomeError" onClick={() => navigate("/")}>
          Ir al inicio
        </Button>
      </Container>
      <Footer />
    </>
  );
}
