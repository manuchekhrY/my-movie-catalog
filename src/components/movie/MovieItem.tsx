import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Movie } from '../../store/store';
import './Movie.css'

export const MovieItem: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const movies = useSelector((state: { movies: { movies: Movie[] } }) => state.movies.movies);
  const movie = movies.find((m) => m.id === Number(movieId));
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';


  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-details">
      <img className="poster" src={imgBaseUrl + movie.poster_path} alt={movie.title} />
      <div className="info">
        <h2 className="title">{movie.title}</h2>
        <p className="overview">{movie.overview}</p>
        <p className="overview">Release Date : {movie.release_date}</p>
        <p className="overview">{movie.vote_average}</p>
        
      </div>
    </div>
  );
};
