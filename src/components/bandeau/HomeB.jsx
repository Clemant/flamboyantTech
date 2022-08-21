import { Box, Typography } from "@mui/material";

const HomeB = () => {
  return (
    <Box>
      <Box
        className="container"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          height: 225,
        }}
      >
        <Box className="logo">
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: "Open Sans", marginTop: 2, paddingLeft: 2 }}
          >
            Logo
          </Typography>
        </Box>
        <Box className="content">
          <Typography
            variant="h1"
            sx={{ fontFamily: "Open Sans", paddingLeft: 2 }}
          >
            FlamboyanTech
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Open Sans", paddingLeft: 2 }}
          >
            Le num&eacute;rique &agrave; votre portee
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeB;
