import React from "react";
import '../navbar/Navbar.css'
import { useSelector } from "react-redux";
import { Movie } from "../../store/store";
import { Link } from "react-router-dom";

const MovieList: React.FC = () => {
    const movies = useSelector((state: { movies: { movies: Movie[] } }) => state.movies.movies);

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="forms">
            {
                movies.length === 0 && <p>No movies found</p>
            }
            {
                movies.map((movie) => (
                    <Link to={`/movies/${movie.id}`} key={movie.id} >
                    <div className="form">
                        <img className="image" src={imgBaseUrl + movie.poster_path} alt={movie.title} />
                        <div>
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <p>Release Date : {movie.release_date}</p>
                        </div>
                    </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default MovieList;

/*
    const displayMovies = () => {

        const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

        return movies.map((movie) => (
            <div key={movie.id} className="form">
                <img className="image" src={imgBaseUrl + movie.poster_path} alt={movie.title} />
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Release Date : {movie.release_date}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="forms">
            {
                movies.length === 0 && <p>No movies found</p>
            }
            {
                displayMovies()
            }
        </div>

    );
*/