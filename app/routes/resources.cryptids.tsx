import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Cryptids() {
	return (
		<div className="page cryptids">
			<h1>Cryptids</h1>
			<h3>Under Construction</h3>
			<Link to="/resources">Back to Resources</Link>
		</div>
	);
}
