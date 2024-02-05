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
        (c) =>
          String(c.lat).slice(0, 4) !== String(action.payload.lat).slice(0, 4) &&
          String(c.lon).slice(0, 4) !== String(action.payload.lon).slice(0, 4)
      );
      setItem("favorites", state.favorites);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchedCity, changeSearchedCities, addFav, removeFav } = counterSlice.actions;

export default counterSlice.reducer;
