import { Stack, styled } from "@mui/material";
import Footer from "./components/commun/Footer";
import NavBar from "./components/commun/Navbar";

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
    >
      <NavBar />
      <Footer />
    </Stack>
  );
}

export default App;
