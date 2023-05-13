import { Box, Typography } from "@mui/material";
import "./Card.css";

export default function Card(props: { city: object }) {
   const { city } = props;
   const { name } = city;
   return (
      <Box className="boxCardName">
         <Box className="boxCard"></Box>
         <Typography className="nameCity">{name}</Typography>
      </Box>
   );
}
