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
			<section>
				<img
					className="image-link"
					alt="UFOs"
					title="UFOs"
					src="../static/media/misc/photo-1547235001-086f37fa0088.jpg"
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
