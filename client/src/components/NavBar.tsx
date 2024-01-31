import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import makeStyles from "@mui/material/styles/makeStyles";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const pages = [
  { text: "Inicio", url: "/home" },
  { text: "Ciudades Populares", url: "/popular" },
  { text: "Acerca de Nosotros", url: "/about" },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            component="a"
            href="/"
            className="titleNavBar"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            Weather
          </Typography>
          <Typography
            component="a"
            href="/"
            className="titleNavBar"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: "500",
            }}
          >
            App
          </Typography>

          <Box className="boxItemsNavBar" sx={{ display: { xs: "none", md: "flex" } }}>
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
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* Móvil */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
