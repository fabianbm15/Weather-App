import * as React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./NavBar.css";

const pages = [
  { text: "Inicio", url: "/" },
  { text: "Ciudades Populares", url: "/popular" },
  { text: "Acerca de mí", url: "/about" },
];

function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e: string) => {
    navigate(e);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="appBarNavBar">
      <Container className="containerNavBar">
        <Toolbar disableGutters>
          {/* Ordenador */}
          <img className="logoNavBar" src={logo} alt="logo" />
          <Typography component="a" href="/" className="titleNavBar">
            Weather
          </Typography>
          <Typography component="a" href="/" className="titleNavBar titleNavBarBolder">
            App
          </Typography>

          <Box className="boxItemsNavBar">
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={() => handleCloseNavMenu(page.url)}
                className="menuItem"
                sx={{ display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          {/* Móvil */}
          <Box className="menuMovil" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={() => handleCloseNavMenu(page.url)}>
                  <Typography className="menuItem" textAlign="center">
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
