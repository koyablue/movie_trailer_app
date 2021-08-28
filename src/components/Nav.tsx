import { useEffect, useState } from "react";
import "../stylesheets/Nav.scss";
import values from "../config/values";

type Props = {
	className?: string;
};

export const Nav = ({className}: Props) => {
	const [show, setShow] = useState(false);

	const controllNavBar = () => {
		window.scrollY > 100 ? setShow(true) : setShow(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", controllNavBar);

		//cleanup
		return () => {
			window.removeEventListener("scroll", controllNavBar);
		};
	}, []);

	return (
		<div className={`navbar ${show && "navbar--black"}`}>
			<img className="navbar__logo" src={`${process.env.PUBLIC_URL}/img/Netflix_Logo_RGB.png`} alt="Netflix Logo" />
			<a href={`${values.github_repo_url}`}>
			<img
				className="navbar__avater"
				src={`${process.env.PUBLIC_URL}/img/GitHub-Mark-Light-64px.png`}
				alt="GitHub Logo"
			/>
			</a>
		</div>
	);
};