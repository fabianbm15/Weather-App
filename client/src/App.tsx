import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";
import { useLocation } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
  const location = useLocation();
  return (
    <Box style={{ maxWidth: "100%", padding: "0" }}>
      <NavBar />
      {location.pathname === "/about" ? (
        <About />
      ) : location.pathname === "/" ? (
        <Home />
      ) : location.pathname === "/home" ? (
        <Home />
      ) : location.pathname === "/details" ? (
        <Details />
      ) : null}
      <Footer />
    </Box>
  );
}

export default App;
