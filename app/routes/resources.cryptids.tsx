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
			<section>
				<img
					className="image-link"
					alt="Cryptids"
					title="Cryptids"
					src="../static/media/misc/photo-1665245080999-3a5f0113b6d7.jpg"
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
