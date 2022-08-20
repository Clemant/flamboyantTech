import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Link,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Contact";
import Services from "../Services";
import About from "../About";
import Home from "../Home";

const navItems = [
  { page: "/home", title: "Acceuil" },
  { page: "/about", title: "Qui sommes-nous" },
  { page: "/services", title: "Services" },
  { page: "/contact", title: "Contact" },
];

const toggleDrawer = () => {};

const NavBar = () => {
  return (
    <BrowserRouter>
      <AppBar position="static" component="nav">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={1}
            >
              <Button sx={{ display: { xs: "block", sm: "none" } }}>
                test
              </Button>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={3}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {navItems.map((element, item) => (
                  <Button key={item} href={element.page} sx={{ color: "#fff" }}>
                    {element.title}
                  </Button>
                ))}
              </Stack>
              {/* <MenuItem sx={{ color: "white" }}>
              <Link to="home">Accueil</Link>
            </MenuItem>
            <MenuItem sx={{ color: "white" }}>
              <Link to="about">Qui sommes-nous ?</Link>
            </MenuItem>
            <MenuItem sx={{ color: "white" }}>
              <Link to="services">Services</Link>
            </MenuItem>
            <MenuItem sx={{ color: "white" }}>
              <Link to="contact">Contact</Link>
            </MenuItem> */}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          width: "100%",
          height: 165,
          marginBottom: 5,
          marginTop: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontFamily: "Open Sans", paddingLeft: 2 }}
        >
          FlamboyanTech
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: "Open Sans", marginTop: 2, paddingLeft: 2 }}
        >
          Phrase d'accroche
        </Typography>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
