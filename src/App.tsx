import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import MovieItem from './components/movie/MovieItem';
import { SearchForm } from './components/navbar/SearchForm';

function App() {
    return (
        <div>
            <Navbar/>
            <SearchForm/>
            <MovieItem/>
        </div>
    );
}

export default App;
