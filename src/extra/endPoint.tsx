const apiKey = '2a777bcc8641401cbf9978cb7d0b4065';

export const searchUrl = (movieName : string) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`;

export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
