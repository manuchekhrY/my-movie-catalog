export interface Movie {
    title: string,
    release_date: string,
    overview: string,
    poster_path: string,
    
}

export interface MovieState {
    movies: Movie[];
}

function returnArrayData(apiResponse: any): Movie[] {
    const movies: Movie[] = apiResponse.data.results.map((result: any) => {
        //console.log(result);
        const movie: Movie = {
            poster_path: result.poster_path,
            title: result.title,
            release_date: result.release_date,
            overview: result.overview
        };
        return movie;
    });
    return movies;
}

export default returnArrayData;

