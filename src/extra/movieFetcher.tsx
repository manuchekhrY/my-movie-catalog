import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setMovies } from '../store/store';

interface MovieFetcherProps {
  url: string;
  currentPage: number;
}

const MovieFetcher: React.FC<MovieFetcherProps> = ({ url, currentPage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then(res => {
      const movies = res.data.results;
      const totalPages = res.data.total_pages;
      dispatch(setMovies({ movies, totalPages }));
    });
  }, [url, currentPage, dispatch, setMovies]);

  return null;
};

export default MovieFetcher;