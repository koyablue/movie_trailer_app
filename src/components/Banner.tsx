import { useEffect, useState } from "react";
import axiosInstance from "../axios";
// import apiConfig from "../config/api";
import { requests } from "../request";

type movieProps = {
	title?: string;
	name?: string;
	original_name?: string;
	backdrop_path?: string;
	overview?: string;
};

export const Banner = ({title, name, original_name, backdrop_path, overview}: movieProps) => {
	const [movie, setMovie] = useState<movieProps>({});

	useEffect(() => {
		async function fetchData() {
			const request = await axiosInstance.get(`${requests.fetchNetflixOriginals}`);
			const movies = request.data.results;
			// console.log('useEffect fetch data: ', request.data.results);

			setMovie(movies[Math.floor(Math.random() * movies.length)]);
			return request;
		}
		fetchData();
	}, []);

	console.log(movie);

	return (
		<div></div>
	);
}