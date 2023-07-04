import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface Movie {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
}

const initialState : Movie[] = [];

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setMovies: (state, action: PayloadAction<Movie[]>) => {
        return action.payload;
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
