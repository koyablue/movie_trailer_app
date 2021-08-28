import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import apiConfig from "../config/api";
import { requests } from "../request";
import "../stylesheets/Banner.scss";

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
		const fetchData = async () => {
			const request = await axiosInstance.get(`${requests.fetchNetflixOriginals}`);
			const movies = request.data.results;

			setMovie(movies[Math.floor(Math.random() * movies.length)]);
			return request;
		};
		fetchData();
	}, []);

	const truncate = (str: string | undefined, limit: number): string | undefined => {
		if (str !== undefined) {
			return str.length > limit ? str.substr(0, limit - 1) + "..." : str;
		}
	};

	return (
		<header
			className="banner"
			style={
				{
					backgroundSize: "cover",
					backgroundImage: `url("${apiConfig.img_base_path}/${movie.backdrop_path}")`,
					backgroundPosition: "center center",
				}
			}
		>
			<div className="banner__contents">
				<h1 className="banner__contents__title">
					{movie.title || movie.name || movie.original_name}
				</h1>
				<div className="banner__contents__buttons">
					<button className="banner__contents__buttons-button">Play</button>
					<button className="banner__contents__buttons-button">My List</button>
				</div>
				<h1 className="banner__contents__description">{truncate(movie.overview, 150)}</h1>
			</div>
			<div className="banner__fade-bottom"></div>
		</header>
	);
}