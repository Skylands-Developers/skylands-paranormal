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
			<section>
				<img
					className="image-link"
					alt="Spirits"
					title="Spirits"
					src="../static/media/misc/pexels-photo-745054.jpeg"
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
