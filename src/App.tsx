import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import MovieList from './components/movie/MovieList';
import SearchForm from './components/navbar/SearchForm';
import { useSelector } from 'react-redux';
import { popularMoviesUrl, searchUrl } from './extra/endPoint';
import NavigationButtons from './extra/pageNavigation';
import MovieFetcher from './extra/movieFetcher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieItem } from './components/movie/MovieItem';


const App: React.FC = () => {

    const totalPages = useSelector((state: { movies: { totalPages: number } }) => state.movies.totalPages);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [loadTopMovies, setLoadTopMovies] = useState(false);

    const handleTopMoviesClick = () => {
        setLoadTopMovies(true);
        setSearchQuery('');
    };

    const handleSearchMovies = (query: string) => {
        setSearchQuery(query);
        setLoadTopMovies(false);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <BrowserRouter>
                <Navbar onClick={handleTopMoviesClick} />
                <SearchForm onSearch={handleSearchMovies} />
                <Routes>
                    <Route path='/' element={<MovieList />}/>
                    <Route path='/movies/:movieId' element={<MovieItem />}/>
                </Routes>
                {loadTopMovies ? (
                    <MovieFetcher url={popularMoviesUrl(currentPage)} currentPage={currentPage} />
                ) : (
                    <MovieFetcher url={searchUrl(searchQuery, currentPage)} currentPage={currentPage} />
                )}
                <NavigationButtons
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </BrowserRouter>
        </div>
    );
};
export default App;