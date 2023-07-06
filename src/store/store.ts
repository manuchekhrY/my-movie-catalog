import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../extra/MovieType";

export interface MoviesState {
  movies: Movie[];
  totalPages: number;
}

const initialState: MoviesState = {
  movies: [],
  totalPages: 0,
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<{movies : Movie[], totalPages : number}>) => {
      state.movies = action.payload.movies;
      state.totalPages = action.payload.totalPages;
    },
  },
});

const store1 = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  }
});


export default store1;
export const { setMovies } = moviesSlice.actions;
