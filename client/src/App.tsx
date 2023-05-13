import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";

function App() {
   return (
      <Box style={{ maxWidth: "100%", padding: "0" }}>
         <NavBar />
         <Home />
      </Box>
   );
}

export default App;
