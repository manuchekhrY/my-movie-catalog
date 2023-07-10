import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import MovieList from './components/movie/MovieList';
import { useSelector } from 'react-redux';
import { popularMoviesUrl, searchUrl } from './extra/apiEndPoints';
import NavigationButtons from './extra/pageNavigation';
import MovieFetcher from './extra/movieFetcher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieItem } from './components/movie/MovieItem';
import './App.css'


const App: React.FC = () => {

    const totalPages = useSelector((state: { movies: { totalPages: number } }) => state.movies.totalPages);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [loadTopMovies, setLoadTopMovies] = useState(false);

    const handleTopMoviesClick = () => {
        setCurrentPage(1);
        setLoadTopMovies(true);
        setSearchQuery('');
    };

    const handleSearchMovies = (query: string) => {
        setCurrentPage(1);
        setSearchQuery(query);
        setLoadTopMovies(false);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo(0,0);
    };

    return (
        <div className='main'>
            <BrowserRouter>
                <Navbar onClick={handleTopMoviesClick} onSearch={handleSearchMovies} />
                <Routes>
                    <Route path='/' element={<MovieList
                        navigationButtons={
                            <NavigationButtons
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        }
                    />} />
                    <Route path='/movies/:movieId' element={<MovieItem />} />
                </Routes>
                {loadTopMovies ? (
                    <MovieFetcher url={popularMoviesUrl(currentPage)} currentPage={currentPage} />
                ) : (
                    <MovieFetcher url={searchUrl(searchQuery, currentPage)} currentPage={currentPage} />
                )}

            </BrowserRouter>
        </div>
    );
};
export default App;