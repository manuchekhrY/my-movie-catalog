import { AppBar, Button, Container, Toolbar } from "@mui/material";
import MovieItem from "../movie/MovieItem";

import { useDispatch, useSelector } from "react-redux/es/exports";
import returnArrayData, { Movie } from "../../extra/MovieType";
import { showMovie } from "../../store";
import axios from "axios";
import { popularMoviesUrl } from "../../extra/endPoint";

export function Navbar() {

    const dispatch = useDispatch();
    /*const movieList = useSelector((state : Movie[]) =>{
        console.log(state);
        return state;
    });*/

    const handleClick = async() =>{
         await axios.get(popularMoviesUrl).then( res=>{
            const filtered = returnArrayData(res);
            filtered.map((movie)=>{
                dispatch(showMovie(movie));
            })
        })
    }

    return (
        <AppBar position="static" sx={{marginBottom:'30px'}}>
            <Container maxWidth='xl' >
                <Toolbar >
                    <Button color="inherit" variant="contained" >Movie Catalog</Button>
                    <Button color="error" variant="contained" sx={{marginLeft: 'auto'}} onClick={handleClick}>Top Movies</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}