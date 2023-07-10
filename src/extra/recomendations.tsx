import axios from "axios"
import { recommendationsUrl } from "./apiEndPoints"
import { useState } from "react";
import { Movie } from "../store/store";
import { Link } from "react-router-dom";
import '../components/movie/MovieList.css'

interface RecommendationProp {
    id: number
}

export const Recommendations: React.FC<RecommendationProp> = ({ id }) => {

    const [movies, setMovies] = useState<Movie[]>([]);

    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

    axios.get(recommendationsUrl(id))
        .then(res =>
            setMovies(res.data.results)
        ).catch(
            err => console.log(err)
        )

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="forms">
            {
                movies.map((movie) => (
                    <Link className="link" to={`/movies/${movie.id}`} key={movie.id} onClick={scrollTop}>
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
                ))
            }
        </div>

    )
}