import { createSlice } from "@reduxjs/toolkit";
import { getItem, getItemSearchedCity, setItem, setItemSearchedCity } from "../../utils/LocalStorage";
import { CityLocalStorage } from "../../types/cityLocalStorage";
import { RootState } from "../../app/store";
import { PayloadAction } from "@reduxjs/toolkit";

interface Coord {
  lat: number;
  lon: number;
}

// Define a type for the slice state
interface CounterState {
  searchedCities: string[];
  favorites: CityLocalStorage[];
  searchedCity: string[];
}

// Define the initial state using that type
const initialState: CounterState = {
  searchedCities: [],
  favorites: getItem("favorites") || [],
  searchedCity: getItemSearchedCity("searchedCity") || [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSearchedCity: (state, action: PayloadAction<string | undefined>) => {
      if (typeof action.payload === "string") {
        state.searchedCity = [action.payload];
        setItemSearchedCity("searchedCity", state.searchedCity);
      }
    },
    changeSearchedCities: (state, action) => {
      state.searchedCities = action.payload;
    },
    addFav: (state, action) => {
      state.favorites.push(action.payload);
      setItem("favorites", state.favorites);
    },
    removeFav: (state, action: PayloadAction<Coord>) => {
      state.favorites = state.favorites.filter(
        (c: CityLocalStorage) =>
          String(c.lat) !== String(action.payload.lat) && String(c.lon) !== String(action.payload.lon)
      );
      setItem("favorites", state.favorites);
    },
  },
});

export const { setSearchedCity, changeSearchedCities, addFav, removeFav } = counterSlice.actions;

export const searchedCities = (state: RootState) => state.counter.searchedCities;
export const favorites = (state: RootState) => state.counter.favorites;
export const searchedCity = (state: RootState) => state.counter.searchedCity;

export default counterSlice.reducer;
