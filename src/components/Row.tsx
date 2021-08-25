import {useEffect, useState} from "react";
import instance from "../axios";
import "./Row.scss"

type Props = {
	title: string;
	fetchUrl: string;
	isLargeRow: boolean;
};

type Movie = {
	id: string;
	name: string;
	title: string;
	original_name: string;
	poster_path: string;
	backdrop_path: string;
}

export const Row = ({title, fetchUrl, isLargeRow = false}: Props) => {
	const [movies, setmovies] = useState<Movie[]>([]);

	const baseUrl: string = "https://image.tmdb.org/t/p/original";

	useEffect(() => {
		async function fetchData() {
			const request = await instance.get(fetchUrl);
			setmovies(request.data.results);
			return request;
		};
		fetchData();
	}, [fetchUrl]);

	console.log(movies)

	return (
		<div className="Row">
			<h2>{title}</h2>
			<div className="Row-posters">
				{/* posters */}
				{movies.map(movie => (
					<img
						key={movie.id}
						className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
						src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};
