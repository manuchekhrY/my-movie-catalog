import { Container, IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React, { Component, useState } from "react";
import returnArrayData, { Movie, MovieState } from "../../extra/MovieType";
import axios from "axios";
import { popularMoviesUrl, searchUrl } from "../../extra/endPoint";
import '../navbar/Navbar.css'
import SearchForm from "../navbar/SearchForm";
import { useSelector } from "react-redux";

function MovieItem() {

    const [movies, setMovies] = useState<Movie[]>([]);

    const topMovies = useSelector((state: MovieState) => {
        //console.log(state.movies);
        return state.movies;
    })

    function top() {
        const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

        return topMovies.map((movie) => {
            return (
                <div className="form">
                    <img className="image" src={imgBaseUrl + movie.poster_path} alt={movie.title} />
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                </div>
            )
        });
    }

    //let currentPage = 1;
    const [currentPage, setCurrentPage] = useState(1);
    //let total_pages = 1;
    const [totalPages, setTotalPages] = useState(1);
    //let lastPage = true;
    const [lastPage, setLastPage] = useState(false);
    //const movieName = '';
    const [movieName, setMovieName] = useState('');
    /*state: MovieState = {
        movies: [],
    };*/

    const fetchMovies = async (searchText: string, page: number) => {
        if (movieName !== searchText) {
            page = 1;
        }
        axios.get(searchUrl(searchText, page))
            .then(res => {
                setMovieName(searchText);

                const data = returnArrayData(res);
                setMovies(data);

                setTotalPages(res.data.total_pages);
                setCurrentPage(page);
                console.log(totalPages);
                //console.log("current page " + currentPage);
                //console.log("page given to api " + page);
                setLastPage(currentPage === totalPages);
            })
            .catch(err => console.log(err))
    };

    const handleSearch = (searchText: string) => {
        fetchMovies(searchText, currentPage);
    };

    const callNextPage = () => {
        const nextPage = currentPage + 1;
        fetchMovies(movieName, nextPage);
    }
    const callPrevPage = () => {
        const prevPage = currentPage - 1;
        fetchMovies(movieName, prevPage);
    }

    function displayData() {
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

    return (
        <>
            <SearchForm onSearch={handleSearch} />
            <div className="forms">
                {movies.length === 0 && <p>No movies found.</p>}
                {displayData()}
                {top()}
            </div>
            <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent: 'center' }}>
                <IconButton onClick={callPrevPage} disabled={currentPage === 1} color="primary" sx={{ marginRight: '10px' }}>
                    <KeyboardDoubleArrowLeftIcon />
                </IconButton>
                <h4>Page {currentPage}</h4>
                <IconButton onClick={callNextPage} disabled={lastPage} color="primary" sx={{ marginLeft: '10px' }}>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </Container>
        </>
    )

}

export default MovieItem;