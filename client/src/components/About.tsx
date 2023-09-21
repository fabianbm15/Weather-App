import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type authors = {
  name: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
};

const authorFabian: authors = {
  name: "Carlos Fabian Melgarejo Agudelo",
  linkedin: "cmelgarejobm",
  linkedinUrl: "https://www.linkedin.com/in/cmelgarejobm/",
  github: "fabianbm15",
  githubUrl: "https://github.com/fabianbm15",
};
export default function About() {
  return (
    <Container>
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {authorFabian.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {authorFabian.linkedin}
                {authorFabian.github}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
}
