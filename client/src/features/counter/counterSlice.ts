import { createSlice } from "@reduxjs/toolkit";
import {
  getItem,
  getItemSearchedCity,
  getItemDetailsCity,
  setItem,
  setItemSearchedCity,
  setItemDetailsCity,
} from "../../utils/LocalStorage";
import { City } from "../../types/city";
import { CityLocalStorage } from "../../types/cityLocalStorage";
import { RootState } from "../../app/store";
import { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  searchedCities: City[];
  favorites: CityLocalStorage[];
  searchedCity: string[];
  detailsCity: City["coord"][];
}

// Define the initial state using that type
const initialState: CounterState = {
  searchedCities: [],
  favorites: getItem("favorites") || [],
  searchedCity: getItemSearchedCity("searchedCity") || [],
  detailsCity: getItemDetailsCity("detailsCity") || [],
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
    setDetailsCity: (state, action: PayloadAction<City["coord"]>) => {
      state.detailsCity = [action.payload];
      setItemDetailsCity("detailsCity", state.detailsCity);
    },
    changeSearchedCities: (state, action) => {
      state.searchedCities = action.payload;
    },
    addFav: (state, action) => {
      state.favorites.push(action.payload);
      setItem("favorites", state.favorites);
    },
    removeFav: (state, action: PayloadAction<City["coord"]>) => {
      state.favorites = state.favorites.filter(
        (c: CityLocalStorage) =>
          String(c.lat) !== String(action.payload.lat) && String(c.lon) !== String(action.payload.lon)
      );
      setItem("favorites", state.favorites);
    },
  },
});

export const { setSearchedCity, changeSearchedCities, addFav, removeFav, setDetailsCity } =
  counterSlice.actions;

export const searchedCities = (state: RootState) => state.counter.searchedCities;
export const favorites = (state: RootState) => state.counter.favorites;
export const searchedCity = (state: RootState) => state.counter.searchedCity;
export const detailsCity = (state: RootState) => state.counter.detailsCity;

export default counterSlice.reducer;
