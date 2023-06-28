export interface Movie {
    id: string,
    title: string,
    release_date: string,
    overview: string,
}

function filterData(apiResponse: any): Movie[] {
    const movies: Movie[] = apiResponse.data.results.map((result: any) => {
        const movie: Movie = {
            id: result.id,
            title: result.title,
            release_date: result.release_date,
            overview: result.overview
        };
        return movie;
    });
    return movies;
}

export default filterData;

