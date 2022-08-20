import {
  Box,
  Card,
  CardMedia,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const contactData = [
  {
    id: 0,
    title: "Contact",
    message:
      "Besoin d'un renseignement? Contactez nous ou envoyez-nous un e-mail, nous sommes la pour vous aidez.",
    picture:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    email: "defautl.email@gmail.com",
  },
];
function Contact() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "98%", paddingLeft: 2, marginTop: 15 }}>
        <Typography variant="h3" flexWrap={"wrap"}>
          {contactData[0].title}
        </Typography>
        <Typography variant="overline" flexWrap={"wrap"}>
          {contactData[0].message}
        </Typography>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={2}
        sx={{ padding: 1, marginTop: 15, marginBottom: 10 }}
      >
        <Box sx={{ width: "45%" }}>
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            helperText="Incorrect entry."
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Nom"
            variant="standard"
            sx={{ width: 500, maxWidth: "100%" }}
          />
        </Box>
        <Card sx={{ width: 650 }}>
          <Paper elevation={4}>
            <CardMedia
              component="img"
              height="390"
              image={contactData[0].picture}
              alt={contactData[0].title}
            />
          </Paper>
        </Card>
      </Stack>
    </Box>
  );
}

export default Contact;
