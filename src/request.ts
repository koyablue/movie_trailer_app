const API_KEY: string | undefined = process.env.REACT_APP_TMDB_API_KEY;

interface Requests {
	fetchTrending: string;
	fetchNetflixOriginals: string;
	fetchTopRated: string;
	fetchActionMovies: string;
	fetchComedyMovies: string;
	fetchHorrorMovies: string;
	fetchRomanceMovies: string;
	fetchDocumentaryMovies: string;
}

export const requests: Requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}