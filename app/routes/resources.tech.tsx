import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Tech() {
	return (
		<div className="page tech">
			<h1>Tech</h1>
			<section>
				<img
					className="image-link"
					alt="Technologies"
					title="Technologies"
					src="../static/media/misc/photo-1455040_960_720.jpg"
				/>
			</section>
			<section>
				<h3>Under Construction</h3>
			</section>
			<div
				style={{
					position: "fixed",
					bottom: "16px",
					left: "auto",
					right: "auto",
					top: "auto",
					textAlign: "center",
					width: "100%",
				}}
			>
				<Link to="/resources">Back to Resources</Link>
			</div>
		</div>
	);
}
