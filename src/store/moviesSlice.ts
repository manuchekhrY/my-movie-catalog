import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie, MovieState } from "../extra/MovieType";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [] as Movie[],
    reducers: {
        /*showMovie(state, action: PayloadAction<Movie>) {
            //state.push(action.payload);
            //return [action.payload]
            return state.concat(action.payload);
        },*/
        showMovie(state, action: PayloadAction<Movie | Movie[]>) {
            if (Array.isArray(action.payload)) {
                return state.concat(action.payload); // Concatenate the new movies with the existing ones
            } else {
                return state.concat([action.payload]); // Add a single movie to the existing array
            }
        },
        removeAllMovies(state) {
            return [];
        }
    },
});

export const { showMovie, removeAllMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;