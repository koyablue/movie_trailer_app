const API_KEY: string | undefined = process.env.REACT_APP_TMDB_API_KEY;

interface ApiEndpoints {
	fetchMovieGenres: string;
	fetchMoviesByGenreId: string;
	fetchTrending: string;
};

export const endpoints: ApiEndpoints = {
	fetchMovieGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
	fetchMoviesByGenreId: `/discover/movie?api_key=${API_KEY}&with_genres=`,
	fetchTrending:`/trending/movie/week?api_key=${API_KEY}&language=en-us`,
};