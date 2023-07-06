import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import MovieItem from './components/movie/MovieItem';
import SearchForm from './components/navbar/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from './store/store';
import axios from 'axios';
import { popularMoviesUrl, searchUrl } from './extra/endPoint';
import { Container, IconButton } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const App: React.FC = () => {

    const dispatch = useDispatch();
    const totalPages = useSelector((state: { movies: { totalPages: number } }) => state.movies.totalPages);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [loadTopMovies, setLoadTopMovies] = useState(false);

    const handleTopMoviesClick = () => {
        axios.get(popularMoviesUrl(currentPage)).then(res => {
            const movies = res.data.results;
            const totalPages = res.data.total_pages;
            dispatch(setMovies({ movies, totalPages }));
        });
    };

    const handleSearchMovies = (query: string) => {
        axios.get(searchUrl(query, currentPage)).then(res => {
            const movies = res.data.results;
            const totalPages = res.data.total_pages;
            dispatch(setMovies({ movies, totalPages }));
        });
    };

    useEffect(() => {
        if (loadTopMovies) {
            handleTopMoviesClick();
            setSearchQuery('')
        }
    }, [loadTopMovies, currentPage]);

    useEffect(() => {
        if (searchQuery !== '') {
            handleSearchMovies(searchQuery);
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
            <Container sx={{ display: 'flex', alignContent: 'center', width: '200px', justifyContent: 'center' }}>
                <IconButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    color="primary"
                >
                    <KeyboardDoubleArrowLeftIcon />
                </IconButton>
                <h4>Page {currentPage}</h4>
                <IconButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                    color="primary"
                >
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </Container>
        </div>
    );
};
export default App;