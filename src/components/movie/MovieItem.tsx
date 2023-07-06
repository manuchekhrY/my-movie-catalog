import React from "react";
import { Movie } from "../../extra/MovieType";
import '../navbar/Navbar.css'
import { useSelector } from "react-redux";

const MovieItem: React.FC = () => {
    const movies = useSelector((state: { movies: { movies: Movie[] } }) => state.movies.movies);

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
};

export default MovieItem;