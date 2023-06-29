import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { searchUrl } from "../../extra/endPoint";
import axios from "axios";
import './Navbar.css'
import returnArrayData, { Movie } from "../../extra/MovieType";

let currentPage = 1;

export function SearchForm() {

    const [movieName, setMovieName] = useState<string>('');

    const [arr, setArr] = useState<Movie[]>();

    function callAPI(page : number) {
        axios.get(searchUrl(movieName, page))
        .then((res) => {
            setArr(returnArrayData(res));
            currentPage = page;
        })
            .catch(err => console.log(err));
    }

    function callNextPage() {
        const nextPage = currentPage + 1;
        callAPI(nextPage);
    }

    const handleClick = () => {
        callAPI(currentPage);
    }

    const handleClick2 = () =>{
        callNextPage();
    }

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    function displayData(array: Movie[]) {
        return array.map((movie) => {
            return (
                <div className="form">
                    <img className="image" src={imgBaseUrl + movie.poster_path} alt={movie.title} />
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
            <Container sx={{ display: 'flex', alignContent: 'center', width: '500px', padding: '10px' }}>
                <TextField
                    color="error"
                    label="Enter text"
                    onChange={e => (setMovieName(e.target.value), currentPage=1)}
                    size="small"
                    fullWidth
                    sx={{ marginRight: '10px' }}
                />

                <Button
                    variant="contained"
                    onClick={handleClick} >
                    Search currentPage{currentPage}
                </Button>
                <Button variant="contained" onClick={handleClick2}>Next Page</Button>
            </Container>
            <div className="forms">
                {
                    arr && (displayData(arr))
                }
            </div>
        </>
    )
}