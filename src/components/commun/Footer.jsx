import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
        marginTop: 35,
        backgroundColor: "#1976d2",
      }}
    >
      <Typography variant="subtitle1">Partie dedié au footer</Typography>
    </Box>
  );
}

export default Footer;
