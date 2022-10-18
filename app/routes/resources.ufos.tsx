import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function UFOs() {
	return (
		<div className="page ufos">
			<h1>UFOs</h1>
			<h3>Under Construction</h3>
			<Link to="/resources">Back to Resources</Link>
		</div>
	);
}
