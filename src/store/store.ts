import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface MoviesState {
  movies: Movie[];
  totalPages: number;
}

export interface Movie {
  vote_average : string,
  title: string,
  release_date: string,
  overview: string,
  poster_path: string,
  id : number,
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

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  }
});


export default store;
export const { setMovies } = moviesSlice.actions;
