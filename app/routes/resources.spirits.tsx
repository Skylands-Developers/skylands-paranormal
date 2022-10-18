import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Spirits() {
	return (
		<div className="page spirits">
			<h1>Spirits</h1>
			<h3>Under Construction</h3>
			<Link to="/resources">Back to Resources</Link>
		</div>
	);
}
