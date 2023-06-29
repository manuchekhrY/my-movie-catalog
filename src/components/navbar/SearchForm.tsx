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

    function displayData(array: Movie[]) {
        return array.map((movie) => {
            return (
                <div className="form">
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>{movie.overview}</h3>
                        <h5>{movie.release_date}</h5>
                    </div>
                </div>)
        });
    }

    return (
        <>
            <form className="form">
                <Grid container spacing={0} alignItems="center">
                    <Grid item xs={8}>
                        <TextField
                            color="error"
                            label="Enter text"
                            onChange={e => setMovieName(e.target.value)}
                            size="small" />
                    </Grid>
                    <Grid item xs={4}>
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