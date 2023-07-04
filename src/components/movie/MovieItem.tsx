import { Button, Container, IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import React, { useEffect, useState } from "react";
import returnArrayData, { Movie, MovieState } from "../../extra/MovieType";
import axios from "axios";
import { searchUrl } from "../../extra/endPoint";
import '../navbar/Navbar.css'
import SearchForm from "../navbar/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { removeAllMovies, showMovie, store } from "../../store";


const MovieItem: React.FC = () => {
    const movies = useSelector((state: { movies: Movie[] }) => state.movies);

    const displayMovies = () => {

        const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

        return movies.map((movie) => (
            <div key={movie.id} className="form">
                <img className="image" src={imgBaseUrl + movie.poster_path} alt={movie.title} />
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>

                </div>
            </div>
        ));
    };

    return <div className="forms">{displayMovies()}</div>;
};

export default MovieItem;

/*
function MovieItem() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [lastPage, setLastPage] = useState(true);
    const [movieName, setMovieName] = useState('');
    //const [movies, setMovies] = useState<Movie[]>([]);

    const dispatch = useDispatch();

    const topMovies = useSelector((state: MovieState) => {
        return state.movies;
    });

    const remove = () => {
        dispatch(removeAllMovies())
    }

    const fetchMovies = (searchText: string, page: number) => {

        if (movieName !== searchText) {
            page = 1;
        }
        axios.get(searchUrl(searchText, page))
            .then(res => {
                setMovieName(searchText);

                //----const dataa = returnArrayData(res);
                //----setMovies(dataa);
                //dispatch(showMovie(dataa));
                const filtered = returnArrayData(res);

                const currentState = store.getState().movies;

                const newMovies = filtered.filter(movie => {
                    return !currentState.some(existingMovie => existingMovie.id === movie.id);
                });

                if (newMovies.length > 0) {
                    store.dispatch(showMovie(newMovies));
                }

                setCurrentPage(page);
                setTotalPages(res.data.total_pages);
                setLastPage(currentPage === totalPages);
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchMovies(movieName, currentPage);
    }, [movieName, currentPage]);

    useEffect(()=>{
        remove()
    },[])


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
        //remove()
        const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

        //return movies.map((movie) => {
        return topMovies.map((movie) => {
            return (
                <div key={movie.id} className="form">
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
                {/*movies.length === 0 && <p>No movies found.</p>*-/}
                {displayData()}
            </div>
            <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent: 'center' }}>
                <IconButton onClick={callPrevPage} disabled={currentPage === 1} color="primary" sx={{ marginRight: '10px' }}>
                    <KeyboardDoubleArrowLeftIcon />
                </IconButton>
                <h4>Page {currentPage}</h4>
                <IconButton onClick={callNextPage} disabled={lastPage} color="primary" sx={{ marginLeft: '10px' }}>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
                <Button onClick={remove}>Remove</Button>
            </Container>
        </>
    )
}*/

//export default MovieItem;