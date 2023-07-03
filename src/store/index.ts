import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../extra/MovieType";
import { moviesReducer, showMovie } from "./moviesSlice";

const store = configureStore({
    reducer: {
      movies: moviesReducer
    }
  });
  
export { store, showMovie };
