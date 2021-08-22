import axios from 'axios';
import {useEffect, useState} from 'react';
import instance from '../axios';

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

export const Row = ({title, fetchUrl}: Props) => {
	const [movies, setmovies] = useState<Movie[]>([]);

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
		<div className="Row" />
	);
};
