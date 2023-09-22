import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./About.css";

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
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src="../image/foto_linkedin.webp"
              alt="image"
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
