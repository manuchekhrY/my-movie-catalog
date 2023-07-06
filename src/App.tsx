import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import MovieItem from './components/movie/MovieItem';
import SearchForm from './components/navbar/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesState, setMovies } from './store/store';
import axios from 'axios';
import { popularMoviesUrl, searchUrl } from './extra/endPoint';
import { Button } from '@mui/material';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: MoviesState) => state.movies);
    const totalPages = useSelector((state: { movies: { totalPages: number } }) => state.movies.totalPages);

    //const movies = useSelector((state : Movie[])=>state);
    //const movies = useSelector((state: { movies : Movie[]}) => state.movies);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [loadTopMovies, setLoadTopMovies] = useState(false);


    //const totalPages = useSelector((state: MoviesState) => state.totalPages);
    const handleTopMoviesClick = () => {

        axios.get(popularMoviesUrl(currentPage)).then(res => {
            const movies = res.data.results;
            const totalPages = res.data.total_pages;

            dispatch(setMovies({ movies, totalPages }));
            //console.log(setMovies({movies, totalPages}))
        });
    };

    const handleSearchMovies = (query: string) => {
        //setSearchQuery(query);
        axios.get(searchUrl(query, currentPage)).then(res => {
            const movies = res.data.results;
            const totalPages = res.data.total_pages;

            dispatch(setMovies({ movies, totalPages }));
            //console.log(setMovies({movies, totalPages}))
        });
    };

  /*  useEffect(()=>{
        //if(currentPage !== 1)
            handleSearchMovies(searchQuery)
            //handleTopMoviesClick()
    }, [currentPage])
*/
    useEffect(() => {
        if (loadTopMovies){
            handleTopMoviesClick();
            //setLoadTopMovies(false);
            setSearchQuery('')
        }
    }, [loadTopMovies, currentPage]);

    useEffect(() => {
        if (searchQuery !== '') {
            handleSearchMovies(searchQuery);
            //setSearchQuery('');
            setLoadTopMovies(false)
        }
    }, [searchQuery, currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <Navbar onClick={() => setLoadTopMovies(true)} />
            <SearchForm onSearch={setSearchQuery} />
            <MovieItem />
            <div>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous Page
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                >
                    Next Page
                </button>
            </div>
            <h4>Page {currentPage}</h4>
        </div>
    );
};
export default App;