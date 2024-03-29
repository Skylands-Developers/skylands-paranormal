import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};
export default function Resources() {
	return (
		<div className="page resources">
			<h1>Resources</h1>
			<hr />
			<section>
				<Link className="title-link" to="/resources/dos-and-donts">
					Do's and Don'ts
				</Link>
				<Link
					className="title-link"
					to="/resources/investigation-basics"
				>
					Investigation Basics
				</Link>
				<Link className="title-link" to="/resources/experiments">
					Experimental Techniques
				</Link>
				<Link className="title-link" to="/resources/phenomena">
					Supernatural Phenomena
				</Link>
				<Link className="title-link" to="/resources/tech">
					Investigation Technology
				</Link>
			</section>
		</div>
	);
}
