import { AppBar, Button, Container, Toolbar } from "@mui/material";

import { useDispatch, useSelector } from "react-redux/es/exports";
import returnArrayData from "../../extra/MovieType";
import { showMovie, store } from "../../store";
import axios from "axios";
import { popularMoviesUrl } from "../../extra/endPoint";
import { moviesReducer } from "../../store/moviesSlice";


export function Navbar() {

    //const dispatch = useDispatch();

    const handleClick = () => {
        axios.get(popularMoviesUrl).then(res => {
            const filtered = returnArrayData(res);
            //dispatch(showMovie(filtered))
            /*filtered.map((movie)=>{
                dispatch(showMovie(movie));
            });*/
            //const filtered = returnArrayData(res);
            const currentState = store.getState().movies;
            
            const newMovies = filtered.filter(movie => {
              return !currentState.some(existingMovie => existingMovie.id === movie.id);
            });
        
            if (newMovies.length > 0) {
              store.dispatch(showMovie(newMovies));
            }
        })
    }

    return (
        <AppBar position="static" sx={{ marginBottom: '30px' }}>
            <Container maxWidth='xl' >
                <Toolbar >
                    <Button color="inherit" variant="contained" >Movie Catalog</Button>
                    <Button color="error" variant="contained" sx={{ marginLeft: 'auto' }} onClick={handleClick}>Top Movies</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}