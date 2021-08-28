import { useEffect, useState } from "react";
import "../stylesheets/Nav.scss";

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

	// return (
	// 	<div className={`nav ${show && "nav--black"}`}>
	// 		<img className="nav__logo--netflix" src={`${process.env.PUBLIC_URL}/img/Netflix_Logo_RGB.png`} alt="Netflix Logo" />
	// 		<img className="nav__logo--github" src={`${process.env.PUBLIC_URL}/img/GitHub-Mark-Light-64px.png`} alt="GitHub Logo" />
	// 	</div>
	// );
	return (
		<div className={`Nav ${show && "Nav-black"}`}>
			<img className="Nav-logo" src={`${process.env.PUBLIC_URL}/img/Netflix_Logo_RGB.png`} alt="Netflix Logo" />
			<img className="Nav-avater" src={`${process.env.PUBLIC_URL}/img/GitHub-Mark-Light-64px.png`} alt="GitHub Logo" />
		</div>
	);
};