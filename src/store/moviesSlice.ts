import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../extra/MovieType";

const moviesSlice = createSlice({
    name: "movie",
    initialState: [] as Movie[],
    reducers: {
        showMovie(state, action: PayloadAction<Movie>) {
            state.push(action.payload);
        },
    },
});

export const { showMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;