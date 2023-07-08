import React from "react";
import './MovieList.css'
import { useSelector } from "react-redux";
import { Movie } from "../../store/store";
import { Link } from "react-router-dom";

interface MovieListProps {
    navigationButtons : JSX.Element;
}

const MovieList: React.FC<MovieListProps> = ({navigationButtons}) => {
    const movies = useSelector((state: { movies: { movies: Movie[] } }) => state.movies.movies);
    console.log(movies)
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <div className="forms">
                {
                    movies.length === 0 && <p>No movies found</p>
                }
                {
                    movies.map((movie) => (
                        <Link to={`/movies/${movie.id}`} key={movie.id} >
                            <div className="form">
                                <img
                                    className="image"
                                    src={movie.poster_path ? imgBaseUrl + movie.poster_path : 'NoPosterFound.png'}
                                    alt={movie.title}
                                    style={{ width: '200px', height: '300px' }}
                                />
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
            {navigationButtons}
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