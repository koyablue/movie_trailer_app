import {useEffect, useState} from "react";
import axiosInstance from "../axios";
import apiConfig from "../config/api";
import "../stylesheets/Row.scss";

type Props = {
	title: string;
	fetchUrl: string;
	isLargeRow?: boolean;
};

type Movie = {
	id: string;
	name: string;
	title: string;
	original_name: string;
	poster_path: string;
	backdrop_path: string;
}

export const Row = ({title, fetchUrl, isLargeRow}: Props) => {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		const fetchMovieData = async () => {
			const request = await axiosInstance.get(fetchUrl);
			setMovies(request.data.results);
			// return request;
		};
		fetchMovieData();
	}, [fetchUrl]);

	// console.log(movies);

	return (
		<div className="Row">
			<h2>{title}</h2>
			<div className="Row-posters">
				{/* posters */}
				{movies.map(movie => (
					<img
						key={movie.id}
						className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
						src={`${apiConfig.img_base_path}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};
