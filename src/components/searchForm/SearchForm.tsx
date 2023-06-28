import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { searchUrl } from "../../extra/endPoint";
import axios from "axios";

export function SearchForm() {

    const [movieName, setMovieName] = useState('');

    const handleClick = () => {
        axios.get(searchUrl(movieName)).then((res) =>{
            for( let movie of res.data.results)
                console.log(movie.title);
        })
        .catch(err => console.log(err))
    }

    return (
        <form className="form">
            <Grid container spacing={1} alignItems="center">
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
    )
}