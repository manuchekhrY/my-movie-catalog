import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { searchUrl } from "../../extra/endPoint";
import axios from "axios";
import './Navbar.css'
import returnArrayData, { Movie } from "../../extra/MovieType";

export function SearchForm() {

    const [movieName, setMovieName] = useState('');

    const [arr, setArr] = useState<Movie[]>();

    const handleClick = () => {
        axios.get(searchUrl(movieName)).then((res) => {
            const data = returnArrayData(res);
            setArr(returnArrayData(res));
            console.log(data);
        })
            .catch(err => console.log(err, 'hello'))
    }

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    function displayData(array: Movie[]) {
        return array.map((movie) => {
            return (
                <div className="form">
                    <img className="image" src={imgBaseUrl + movie.poster_path} alt={movie.title}/>
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                </div>)
        });
    }

    return (
        <>
            <Container sx={{ display: 'flex',alignContent: 'center', width: '500px', padding: '10px'}}> 
                <TextField
                    color="error"
                    label="Enter text"
                    onChange={e => setMovieName(e.target.value)}
                    size="small"
                    fullWidth 
                    sx={{marginRight:'10px'}}
                    />

                <Button
                    variant="contained"
                    onClick={handleClick} >
                    Search
                </Button>
            </Container>
            <div className="forms">
            {
                arr && (displayData(arr))
            }
        </div>
        </>
    )
}