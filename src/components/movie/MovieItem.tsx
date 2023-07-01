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

    currentPage = 1;
    total_pages = 1;
    lastPage = true;
    movieName = '';

    state: MovieState = {
        movies: [],
    };

    fetchMovies = async (searchText: string, page: number) => {
        if(this.movieName !== searchText){
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

    render() {
        return (
            <>
                <SearchForm onSearch={this.handleSearch} />
                <div className="forms">
                    {this.displayData()}
                </div>
                <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent: 'center' }}>
                    <IconButton onClick={this.callPrevPage} disabled={this.currentPage===1} color="primary" sx={{ marginRight: '10px' }}>
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