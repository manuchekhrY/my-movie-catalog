import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { searchUrl } from "../../extra/endPoint";
import axios from "axios";
import './Navbar.css'
import filterData, { Movie } from "../../extra/MovieType";

export function SearchForm() {

    const [movieName, setMovieName] = useState('');

    const [arr, setArr] = useState<Movie[]>();

    const handleClick = () => {
        axios.get(searchUrl(movieName)).then((res) => {
            const data = filterData(res);
            setArr(filterData(res));
            console.log(data);
        })
            .catch(err => console.log(err, 'hello'))
    }

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    function displayData(array: Movie[]) {
        return array.map((movie) => {
            return (
                <div className="form">
                    <img className="image" src={imgBaseUrl + movie.poster_path} alt=""/>
                    <div>
                        <h2>{movie.title}</h2>
                        <h5>{movie.overview}</h5>
                        <h5>{movie.release_date}</h5>
                    </div>
                </div>)
        });
    }

    return (
        <>
            <form className="form">
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <TextField
                            color="error"
                            label="Enter text"
                            onChange={e => setMovieName(e.target.value)}
                            size="small" 
                            />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            onClick={handleClick} >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className="forms">
            {
                arr && (displayData(arr))
            }
        </div>
        </>
    )
}