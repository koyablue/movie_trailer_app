import axios from 'axios';

const instance = axios.create({
	//TMDB(https://www.themoviedb.org/) API endpoint
	baseURL: "https://api.themoviedb.org/3",
});

export default instance;