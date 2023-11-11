import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import imageAuthor1 from "../assets/fabian profile pic.webp";
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
    <Container className="containerAbout">
      <Box
        className="boxAbout"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h3" component="div">
          Acerca de nosotros
        </Typography>

        <Box className="boxCardAbout">
          <Typography className="authorName" gutterBottom variant="h5" component="div">
            {authorFabian.name}
          </Typography>
          <Box className="boxInfoAuthorsCard">
            <img className="imageAuthor1" src={imageAuthor1} alt="no image" />
            <Box className="enlacesAuthor">
              <a href={authorFabian.linkedinUrl} className="aboutButtonPage">
                <Typography className="enlacesAuthorText" variant="h6">
                  <LinkedInIcon /> {` ${authorFabian.linkedin}`}
                </Typography>
              </a>
              <a href={authorFabian.githubUrl} className="aboutButtonPage">
                <Typography className="enlacesAuthorText" variant="h6">
                  <GitHubIcon /> {` ${authorFabian.github}`}
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
