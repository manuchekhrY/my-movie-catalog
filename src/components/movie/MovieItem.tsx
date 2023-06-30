import { Container, IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React, { Component } from "react";
import returnArrayData, { MovieState } from "../../extra/MovieType";
import axios from "axios";
import { searchUrl } from "../../extra/endPoint";
import '../navbar/Navbar.css'
import SearchForm from "../navbar/SearchForm";

class MovieItem extends Component<{}, MovieState> {

    state: MovieState = {
        movies: [],
    };

    fetchMovies = async (searchText: string) => {
        axios.get(searchUrl(searchText, 1))
            .then(res => {
                const data = returnArrayData(res);
                this.setState({ movies: data });
            })
            .catch(err => console.log(err))
    };

    handleSearch = (searchText: string) => {
        this.fetchMovies(searchText);
    };

    displayData() {

        const { movies } = this.state;

        const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

        console.log("you called displayData method");

        return movies.map((movie) => {
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

    render() {
        return (
            <>
                <SearchForm onSearch={this.handleSearch} />
                <div className="forms">
                    {this.displayData()}
                </div>
                <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent: 'center' }}>
                    <IconButton color="primary" sx={{ marginRight: '10px' }}>
                        <KeyboardDoubleArrowLeftIcon />
                    </IconButton>
                    <h3>Page</h3>
                    <IconButton color="primary" sx={{ marginLeft: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                    </IconButton>
                </Container>
            </>
        )
    }
}

export default MovieItem;

/*
    displayData() {

        const { movies } = this.state;

        const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

        console.log("you called displayData method");

        return movies.map((movie) => {
            return (
                <div className="form">
                    {
                        //<img className="image" src={imgBaseUrl + movie.poster_path} alt={movie.title} />
                    }
                    <div>
                        <h2>{movie.title}</h2>

                        <p>Release Date: </p>
                    </div>
                </div>)
        });
    }

const MovieItem = () => {

    //const search = new SearchForm();

    return (
        <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent:'center' }}>
            <IconButton color="primary" sx={{marginRight: '10px'}}>
                <KeyboardDoubleArrowLeftIcon />
            </IconButton>
            <h3>Page</h3>
            <IconButton color="primary" sx={{marginLeft: '10px'}}>
                <KeyboardDoubleArrowRightIcon />
            </IconButton>
        </Container>

    )
}
*/
