import React, { useEffect, useState } from "react";
import { Row } from "./components/Row";
import{ Banner } from "./components/Banner";
import { Nav } from "./components/Nav";
import { endpoints } from "./api_endpoints";
import axiosInstance from "./axios";
import "./stylesheets/App.scss";

interface MovieGenre {
	id: number;
	name: string;
};

const App = () => {
	const [movieGenres, setMovieGenres] = useState<MovieGenre[]>([]);

	useEffect(() => {
		const fetchMovieGenres = async () => {
			const idsAndNamesOfGenres = await axiosInstance.get(endpoints.fetchMovieGenres);
			setMovieGenres(idsAndNamesOfGenres.data.genres);
		};
		fetchMovieGenres();
	}, []);

	return (
		<div className="App">
			<Nav />
			<Banner />
			{/* <Row
			title="NETFLIX ORIGINALS"
			fetchUrl={requests.fetchNetflixOriginals}
			isLargeRow
			/> */}
			{movieGenres.map(idAndName =>
				<Row title={idAndName.name} fetchUrl={`${endpoints.fetchMoviesByGenreId}${idAndName.id}`} />
			)}

		</div>
	);
};

export default App;