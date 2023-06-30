import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import MovieItem from './components/movie/MovieItem';

function App() {
    return (
        <div>
            <Navbar />        
            <MovieItem/>
        </div>
    );
}

export default App;
