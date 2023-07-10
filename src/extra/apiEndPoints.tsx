const apiKey = '2a777bcc8641401cbf9978cb7d0b4065';

export const searchUrl = (movieName : string, pageNumber : number) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}&page=${pageNumber}`;

export const popularMoviesUrl = (pageNumber : number) => `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`;

export const recommendationsUrl = (id : number) => `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`;

export const findMovieById = (id : number) => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
