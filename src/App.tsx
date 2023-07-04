import React from 'react';
import Navbar from './components/navbar/Navbar';
import MovieItem from './components/movie/MovieItem';
import SearchForm from './components/navbar/SearchForm';
import { useDispatch } from 'react-redux';
import { setMovies } from './store/store';
import axios from 'axios';
import { popularMoviesUrl, searchUrl } from './extra/endPoint';

const App: React.FC = () => {
    const dispatch = useDispatch();

    const handleTopMoviesClick = () => {

        axios.get(popularMoviesUrl).then(res => {
            const arrayOfMovies = res.data.results;
            console.log(arrayOfMovies)

            dispatch(setMovies(arrayOfMovies));
        });
    };

    const handleSearchMovies = (query: string) => {

        axios.get(searchUrl(query, 1)).then(res => {
            const arrayOfMovies = res.data.results;
            console.log(arrayOfMovies)

            dispatch(setMovies(arrayOfMovies));
        });
    };

    return (
        <div>
            <Navbar onClick={handleTopMoviesClick} />
            <SearchForm onSearch={handleSearchMovies} />
            <MovieItem />
        </div>
    );
};

export default App;