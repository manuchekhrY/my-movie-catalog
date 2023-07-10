import React from "react";
import './MovieList.css'
import { useSelector } from "react-redux";
import { Movie } from "../../store/store";
import { Link } from "react-router-dom";

interface MovieListProps {
    navigationButtons: JSX.Element;
}

const MovieList: React.FC<MovieListProps> = ({ navigationButtons }) => {

    const movies = useSelector((state: { movies: { movies: Movie[] } }) => state.movies.movies);
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="containers">
            {movies.length === 0 ? (
                <div className="no-movies-found">
                    <p>No movies found</p>
                </div>
            ) : (
                <div className="forms">
                    {movies.map((movie) => (
                        <Link className="link" to={`/movies/${movie.id}`} key={movie.id}>
                            <div className="form">
                                <div className="image-container">
                                    <img
                                        className="image"
                                        src={movie.poster_path ? imgBaseUrl + movie.poster_path : 'NoPosterFound.png'}
                                        alt={movie.title}
                                    />
                                </div>
                                <div>
                                    <h2>{movie.title}</h2>
                                    <p className="overview-text">{movie.overview}</p>
                                    <p className="release-date">Release Date: {movie.release_date}</p>
                                    {
                                        Number(movie.vote_average) !== 0 ? (
                                            <p className="rating">Rating: {movie.vote_average}</p>) : (
                                            <p className="rating">No ratings yet</p>
                                        )
                                    }
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            <div className="navigation-buttons">{navigationButtons}</div>
        </div>
    );
};

export default MovieList;