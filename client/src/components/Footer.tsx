import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./Footer.css";

const pages = [
  { text: "Acerca de mí", url: "/about" },
  { text: "Fabian Melgarejo", url: "/about" },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleCloseNavMenu = (e: string) => {
    navigate(e);
  };

  return (
    <AppBar position="static" className="appBarFooter">
      <Container className="containerFooter">
        <Toolbar className="toolbarFooter" disableGutters>
          <Box className="boxFooter1">
            <Typography component="a" href="/" className="titleNavBar">
              Weather
            </Typography>
            <Typography component="a" href="/" className="titleNavBar titleNavBarBolder">
              App
            </Typography>
          </Box>
          <Box className="boxFooter2">
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={() => handleCloseNavMenu(page.url)}
                className="menuItemFooter"
                sx={{ display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
