import { AppBar, Button, Container, Toolbar } from "@mui/material";

interface NavbarProps {
    onClick: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ onClick }) => {

    return (
        <AppBar position="static" sx={{ marginBottom: '30px' }}>
            <Container maxWidth='xl' >
                <Toolbar >
                    <Button color="inherit" variant="contained" >Movie Catalog</Button>
                    <Button color="error" variant="contained" sx={{ marginLeft: 'auto' }} onClick={onClick}>Top Movies</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;
/**
 import { useDispatch, useSelector } from "react-redux/es/exports";
import returnArrayData from "../../extra/MovieType";
import { showMovie, store } from "../../store";
import axios from "axios";
import { popularMoviesUrl } from "../../extra/endPoint";
import { moviesReducer } from "../../store/moviesSlice";
    //const dispatch = useDispatch();

    /*const handleClick = () => {
        axios.get(popularMoviesUrl).then(res => {
            const filtered = returnArrayData(res);
            //dispatch(showMovie(filtered))
            /*filtered.map((movie)=>{
                dispatch(showMovie(movie));
            });*-/
            //const filtered = returnArrayData(res);
            const currentState = store.getState().movies;
            
            const newMovies = filtered.filter(movie => {
              return !currentState.some(existingMovie => existingMovie.id === movie.id);
            });
        
            if (newMovies.length > 0) {
              store.dispatch(showMovie(newMovies));
            }
        })
    }*/
