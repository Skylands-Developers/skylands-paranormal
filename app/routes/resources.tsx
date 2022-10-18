import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useNavigate } from "react-router-dom";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};
export default function Resources() {
	const navigate = useNavigate();
	return (
		<div className="page resources">
			<h1>Resources</h1>
			<hr />
			<section>
				<div className="gallery">
					<img
						className="image-link"
						alt="Technologies"
						title="Technologies"
						src="static/media/misc/photo-1455040_960_720.jpg"
						onClick={() => {
							navigate("/resources/tech");
						}}
					/>
					<Link className="title" to="/resources/tech">
						Technologies
					</Link>
				</div>
				<div className="gallery">
					<img
						className="image-link"
						alt="Spirits"
						title="Spirits"
						src="static/media/misc/pexels-photo-745054.jpeg"
						onClick={() => {
							navigate("/resources/spirits");
						}}
					/>
					<Link className="title" to="/resources/spirits">
						Spirits
					</Link>
				</div>
				<div className="gallery">
					<img
						className="image-link"
						alt="UFOs"
						title="UFOs"
						src="static/media/misc/photo-1547235001-086f37fa0088.jpg"
						onClick={() => {
							navigate("/resources/ufos");
						}}
					/>
					<Link className="title" to="/resources/ufos">
						UFOs
					</Link>
				</div>
				<div className="gallery">
					<img
						className="image-link"
						alt="Cryptids"
						title="Cryptids"
						src="static/media/misc/photo-1665245080999-3a5f0113b6d7.jpg"
						onClick={() => {
							navigate("/resources/cryptids");
						}}
					/>
					<Link className="title" to="/resources/cryptids">
						Cryptids
					</Link>
				</div>
			</section>
		</div>
	);
}
