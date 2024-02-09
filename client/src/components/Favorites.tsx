import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { City } from "../types/city";
import { CityLocalStorage } from "../types/cityLocalStorage";
import Card from "./Card";
import { Container, Typography, Box } from "@mui/material";
import "./Favorites.css";

const BACK = import.meta.env.VITE_BACK;

export default function Favorites() {
  const favorites: CityLocalStorage[] = useAppSelector((state) => state.counter.favorites);
  const [favCards, setFavCards] = useState<City[]>([]);
  const [favCardsLocal, setFavCardsLocal] = useState<CityLocalStorage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setFavCardsLocal(favorites);
  }, [favorites]);

  useEffect(() => {
    setFavCards([]);
    setIsLoading(true);
    const fetchDataForFavorites = async () => {
      try {
        const dataForFavorites: City[] = [];

        for (const c of favCardsLocal) {
          const { lat, lon } = c;
          const response = await axios.get(`${BACK}/search/lat-lon/?lat=${lat}&lon=${lon}`);
          dataForFavorites.push(response.data[0]);
        }

        setFavCards(dataForFavorites);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataForFavorites();
  }, [favCardsLocal]);

  return (
    <Container className="containerFavorites">
      <Box className="boxFavoritesTitle">
        <Typography className="titleFavorites">Ciudades</Typography>
        <Typography
          className="titleFavorites"
          sx={{
            fontWeight: "500",
            marginLeft: "8px",
          }}
        >
          Favoritas
        </Typography>
      </Box>
      <Box className="boxCards">
        {favCards.length === 0 ? (
          isLoading ? (
            <Box className="containerSpinner">
              <div className="spinner"></div>
            </Box>
          ) : (
            <Box className="boxEmptyFavorites">
              <Typography className="favoritesEmptyText">{`No hay ciudades favoritas en estos momentos, agrega ciudades para verlas aquí.`}</Typography>
              <svg viewBox="0 0 24 24" className="svgFavoriteIconFavoritesPage">
                <g>
                  <g>
                    <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
                  </g>
                </g>
              </svg>
            </Box>
          )
        ) : (
          favCards.map((city, key) => {
            return <Card city={city} key={key} />;
          })
        )}
      </Box>
    </Container>
  );
}
