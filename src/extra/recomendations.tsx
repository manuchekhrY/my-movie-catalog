import axios from "axios"
import { recommendationsUrl } from "./endPoint"
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
        )

    return (
        <div className="forms">
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
    )
}