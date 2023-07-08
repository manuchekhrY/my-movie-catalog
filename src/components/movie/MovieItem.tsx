import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Movie } from '../../store/store';
import './MovieItem.css'
import { Recommendations } from '../../extra/recomendations';
import axios from 'axios';
import { findMovieById } from '../../extra/endPoint';
import { useEffect, useState } from 'react';
import './MovieList.css'

export const MovieItem: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const movies = useSelector((state: { movies: { movies: Movie[] } }) => state.movies.movies);
  const [movie, setMovie] = useState<Movie>();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const movieData = () => {
    axios.get(findMovieById(Number(movieId)))
      .then(res => {
        console.log(res.data)
        setMovie(res.data)
      })
  }

  useEffect(() => {
    movieData()
  }, [movieId])

  if (!movie) {
    return <p>Movie not found</p>;
  }



  return (
    <div>

      <div className="movie-details">
        <img
          className="image"
          src={movie.poster_path ? imgBaseUrl + movie.poster_path : 'NoPosterFound.png'}
          alt={movie.title}
          style={{ width: '200px', height: '300px' }}
        />
        <div className="info">
          <h2 className="title">{movie.title}</h2>
          <p className="overview">{movie.overview}</p>
          <p className="overview">Release Date : {movie.release_date}</p>
          <p className="overview">{movie.vote_average}</p>

        </div>
      </div>
      <h3>Recommendations</h3>
      <Recommendations id={movie.id} />
    </div>
  );
};
