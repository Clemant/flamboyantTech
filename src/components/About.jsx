import {
  Box,
  Card,
  CardMedia,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
let dataObject = [
  {
    id: 0,
    title: "Qui sommes-nous?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 1,
    title: "Qu'elle est notre activités?",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ultricies augue. Phasellus cursus justo libero, vel dapibus mauris vehicula in. Duis ac tristique nulla. Morbi eu augue dolor. Donec eu consequat leo, at consequat dui. Etiam condimentum lectus urna, vel placerat est ornare ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent interdum eros sed neque interdum tempus. Aenean placerat, ipsum ut ornare interdum, libero augue elementum odio, sit amet egestas lacus est sed lectus. Aenean vitae dolor et libero viverra tincidunt. Nulla efficitur dolor ac velit rhoncus egestas.",
    picture:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
let partenaires = [
  {
    id: 0,
    title: "Nom partenaire 1",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 1,
    title: "Nom partenaire 2",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    title: "Nom partenaire 2",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    title: "Nom partenaire 2",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

function About() {
  return (
    <Box sx={{ padding: 1 }}>
      {dataObject.map((element, index) => {
        if (index % 2 == 0) {
          return (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-evenly"
              alignItems="flex-start"
              spacing={2}
              sx={{ padding: 1, marginTop: 5, marginBottom: 30 }}
            >
              <Box sx={{ width: "45%" }}>
                <Typography variant="h4" flexWrap={"wrap"}>
                  {element.title}
                </Typography>
                <Typography variant="overline" flexWrap={"wrap"}>
                  {element.message}
                </Typography>
              </Box>
              <Card sx={{ width: 650 }}>
                <CardMedia
                  component="img"
                  height="390"
                  image={element.picture}
                  alt={index}
                />
              </Card>
            </Stack>
          );
        }
        return (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={2}
            sx={{ padding: 1, marginTop: 5, marginBottom: 5 }}
          >
            <Card sx={{ width: 650 }}>
              <Paper elevation={4}>
                <CardMedia
                  component="img"
                  height="390"
                  image={element.picture}
                  alt={index}
                />
              </Paper>
            </Card>

            <Box sx={{ width: "45%" }}>
              <Typography variant="h4" flexWrap={"wrap"}>
                {element.title}
              </Typography>
              <Typography variant="overline" flexWrap={"wrap"}>
                {element.message}
              </Typography>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
}

export default About;
