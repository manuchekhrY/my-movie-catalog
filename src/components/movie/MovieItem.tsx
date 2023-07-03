import { Container, IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React, { Component } from "react";
import returnArrayData, { Movie, MovieState } from "../../extra/MovieType";
import axios from "axios";
import { popularMoviesUrl, searchUrl } from "../../extra/endPoint";
import '../navbar/Navbar.css'
import SearchForm from "../navbar/SearchForm";
import { useSelector } from "react-redux";

class MovieItem extends Component<{}, MovieState> {
    
    currentPage = 1;
    total_pages = 1;
    lastPage = true;
    movieName = '';

    state: MovieState = {
        movies: [],
    };

    fetchMovies = async (searchText: string, page: number) => {
        if (this.movieName !== searchText) {
            page = 1;
        }
        axios.get(searchUrl(searchText, page))
            .then(res => {
                this.movieName = searchText;

                const data = returnArrayData(res);
                this.setState({ movies: data });

                this.total_pages = res.data.total_pages;
                this.currentPage = page;
                this.lastPage = this.currentPage === this.total_pages;
            })
            .catch(err => console.log(err))
    };

    handleSearch = (searchText: string) => {
        this.fetchMovies(searchText, this.currentPage);
    };

    callNextPage = () => {
        const nextPage = this.currentPage + 1;
        this.fetchMovies(this.movieName, nextPage);
    }
    callPrevPage = () => {
        const prevPage = this.currentPage - 1;
        this.fetchMovies(this.movieName, prevPage);
    }

    displayData() {
        const { movies } = this.state;
        const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

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

    displayTop =async () => {
        await axios.get(popularMoviesUrl).
            then(res => {
                const data = res.data.results;
                //console.log(data);

                //this.setState({ movies: data })
                const filtered = returnArrayData(res);
                console.log(filtered);
                this.my(res.data.results);
                console.log(this.state.movies);
            })
    }
    my = (text : MovieState) =>{
        this.setState(text);
    }

    render() {
        return (
            <>
                <SearchForm onSearch={this.handleSearch} />
                <div className="forms">
                    {this.state.movies.length === 0 && <p>No movies found.</p>}
                    {this.displayData()}
                </div>
                <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent: 'center' }}>
                    <IconButton onClick={this.callPrevPage} disabled={this.currentPage === 1} color="primary" sx={{ marginRight: '10px' }}>
                        <KeyboardDoubleArrowLeftIcon />
                    </IconButton>
                    <h4>Page {this.currentPage}</h4>
                    <IconButton onClick={this.callNextPage} disabled={this.lastPage} color="primary" sx={{ marginLeft: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                    </IconButton>
                </Container>
            </>
        )
    }
}

export default MovieItem;