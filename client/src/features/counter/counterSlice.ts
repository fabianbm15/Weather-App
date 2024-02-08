import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../utils/LocalStorage";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    searchedCities: [],
    favorites: getItem("favorites") || [],
    searchedCity: getItem("searchedCity") || [],
  },
  reducers: {
    setSearchedCity: (state, action) => {
      state.searchedCity = [action.payload];
      setItem("searchedCity", state.searchedCity);
    },
    changeSearchedCities: (state, action) => {
      state.searchedCities = action.payload;
    },
    addFav: (state, action) => {
      state.favorites.push(action.payload);
      setItem("favorites", state.favorites);
    },
    removeFav: (state, action) => {
      state.favorites = state.favorites.filter(
        (c) => String(c.lat) !== String(action.payload.lat) && String(c.lon) !== String(action.payload.lon)
      );
      setItem("favorites", state.favorites);
    },
  },
});

export const { setSearchedCity, changeSearchedCities, addFav, removeFav } = counterSlice.actions;

export default counterSlice.reducer;
