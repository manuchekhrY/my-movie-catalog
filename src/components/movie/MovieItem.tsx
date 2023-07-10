import { useParams } from 'react-router-dom';
import { Movie } from '../../store/store';
import './MovieItem.css'
import { Recommendations } from '../../extra/recomendations';
import axios from 'axios';
import { findMovieById } from '../../extra/apiEndPoints';
import { useEffect, useState } from 'react';
import { Chip, CircularProgress, Divider, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';

export const MovieItem: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
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
    return (
      <div className='containers'>
        <CircularProgress />
      </div>
    );
  }

  const divider = () => {
    return (
      <Divider sx={{ marginBottom: '10px', height: '2px', backgroundColor: 'red' }} />
    )
  }

  return (
    <div className='item'>
      <div className="movie-details">
        <img
          className="poster"
          src={movie.poster_path ? imgBaseUrl + movie.poster_path : 'NoPosterFound.png'}
          alt={movie.title}
        />
        <div className='info'>
          <h2 className='title'>{movie.title}</h2>
          { movie.tagline && (
            <Typography sx={{ fontStyle: 'italic', marginBottom: '10px' }} >'{movie.tagline}'</Typography>) 
          }
          <p className='overview'>{movie.overview}</p>
          {divider()}
          <p className='other'> Release Date :
            <Chip sx={{ fontSize: '16px', marginLeft: '10px' }} color='success' label={movie.release_date} />
          </p>
          {divider()}
          {
            movie.genres[0] ? (
              <p className='other'>Genres : {
                movie.genres.map((genre) => <Chip label={genre.name} color='success' sx={{ marginLeft: '10px', fontSize: '16px' }} />)
              }
              </p>
            ) : (
              <p className='other'>Genres : Coming soon!</p>
            )

          }
          {divider()}
          {
            Number(movie.vote_average) !== 0 ? (
              <p className="other">Rating: {
                <Chip icon={<Star />} color='success' label={movie.vote_average} sx={{ fontSize: '16px', marginLeft: '10px' }} />
              }
              </p>) : (
              <p className="other">No ratings yet</p>
            )
          }
        </div>
      </div>
      <h3>Recommendations</h3>
      <Divider sx={{ alignSelf: 'center', width: '85%', height: '4px', backgroundColor: 'red' }} />
      <Recommendations id={movie.id} />
    </div>
  );
};
