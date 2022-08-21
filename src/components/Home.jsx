import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { textAlign } from "@mui/system";
import { useState } from "react";

let dataObject1 = [
  {
    id: 0,
    title: "Conseil",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 1,
    title: "Support",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    title: "Formation",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Ventes",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    picture:
      "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

let dataObject = [
  {
    id: 0,
    title: "Formation",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sit amet ex eget interdum. Nullam eu odio a dolor luctus varius. Cras elementum, nulla ut vestibulum auctor, nulla eros ultricies diam, a congue enim ipsum pretium ipsum. Aenean rhoncus posuere facilisis. Donec gravida sem ac sapien congue, a cursus ligula commodo. Nullam vitae fringilla ipsum. Fusce sodales justo ligula, in commodo lorem ultrices non. Nulla nibh felis, dictum at sollicitudin non, commodo in enim. In et tincidunt ex. Sed volutpat sed ex a laoreet. Nullam sed hendrerit nulla, eget tincidunt orci. Curabitur varius ipsum turpis. In hac habitasse platea dictumst. Phasellus cursus elit eget mi cursus, nec dignissim dui lacinia.",
    picture:
      "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 1,
    title: "Conseil",
    message:
      "Nam metus tellus, mattis a scelerisque faucibus, mattis in neque. Donec a diam laoreet, vulputate mi ornare, laoreet eros. Morbi est sapien, feugiat id leo a, blandit ornare nunc. In iaculis faucibus leo, eu rutrum enim sollicitudin in. Morbi dapibus eros id fermentum porta.",
    picture:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Support",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ultricies augue. Phasellus cursus justo libero, vel dapibus mauris vehicula in. Duis ac tristique nulla. Morbi eu augue dolor. Donec eu consequat leo, at consequat dui. Etiam condimentum lectus urna, vel placerat est ornare ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent interdum eros sed neque interdum tempus.",
    picture:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },

  {
    id: 3,
    title: "Vente",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sit amet ex eget interdum. Nullam eu odio a dolor luctus varius. Cras elementum, nulla ut vestibulum auctor, nulla eros ultricies diam, a congue enim ipsum pretium ipsum. Aenean rhoncus posuere facilisis. Donec gravida sem ac sapien congue, a cursus ligula commodo. Nullam vitae fringilla ipsum. Fusce sodales justo ligula, in commodo lorem ultrices non. Nulla nibh felis, dictum at sollicitudin non, commodo in enim. In et tincidunt ex. Sed volutpat sed ex a laoreet. Nullam sed hendrerit nulla, eget tincidunt orci. Curabitur varius ipsum turpis. In hac habitasse platea dictumst. Phasellus cursus elit eget mi cursus, nec dignissim dui lacinia.",
    picture:
      "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const list = [
  [0, 1],
  [2, 3],
];

function Home() {
  return (
    <Box sx={{ width: "85%" }}>
      <Box>
        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="baseline"
        >
          {list.map((element, index) => {
            return (
              <Box
                key={index}
                sx={{
                  marginTop: 1,
                  marginBottom: 3,
                  width: "100%",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  alignItems="baseline"
                  sx={{ marginTop: 7, marginBottom: 5 }}
                >
                  {element.map((e, i) => {
                    return (
                      <Link
                        href={`/services/${dataObject[
                          e
                        ].title.toLocaleLowerCase()}`}
                        underline="none"
                        variant="h5"
                        sx={{ alignContent: "center" }}
                        className={dataObject[e].title}
                      >
                        <Card sx={{ maxWidth: 550 }} key={index}>
                          <CardMedia
                            component="img"
                            alt={index}
                            height="430"
                            image={dataObject[e].picture}
                          />
                          <CardContent className="test">
                            <Typography
                              variant="h5"
                              component="div"
                              sx={{ justifyContent: "center" }}
                            >
                              {dataObject[e].title}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </Stack>
              </Box>
            );
          })}
          {console.log(dataObject[1].title)}
        </Stack>
      </Box>
    </Box>
  );
}

export default Home;
