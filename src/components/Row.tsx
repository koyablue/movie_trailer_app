import {useEffect, useState} from "react";
import YouTube from "react-youtube";
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

type MovieTrailerOptions = {
	height: string;
	width: string;
	playerVars: {
		autoplay: 0 | 1 | undefined;
	};
};

export const Row = ({title, fetchUrl, isLargeRow}: Props) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [trailerUrl, setTrailerUrl] = useState<string | null>("");

	useEffect(() => {
		const fetchMovieData = async () => {
			const request = await axiosInstance.get(fetchUrl);
			setMovies(request.data.results);
			// return request;
		};
		fetchMovieData();
	}, [fetchUrl]);

	const trailerOptions: MovieTrailerOptions = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 1,
		}
	};

	const handlePosterClick = async (movie: Movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
			return;
		}

		const trailerUrlResp = await axiosInstance.get(
			`/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

		const urls = trailerUrlResp.data.results;
		urls.length ? setTrailerUrl(urls[0].key) : setTrailerUrl("");

		console.log('urls', urls);
		console.log('trailerUrl', trailerUrl);
	};

	return (
		<div className="Row">
			<h2>{title}</h2>
			<div className="Row-posters">
				{movies.map(movie => (
					<img
						key={movie.id}
						className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
						src={`${apiConfig.img_base_path}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
						alt={movie.name}
						onClick={() => handlePosterClick(movie)}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={trailerOptions} />}
		</div>
	);
};
