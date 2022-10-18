import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Tech() {
	return (
		<div className="page tech">
			<h1>Technologies</h1>
			<h3>Under Construction</h3>
			<Link to="/resources">Back to Resources</Link>
		</div>
	);
}
