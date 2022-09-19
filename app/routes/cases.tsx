import type { LinksFunction } from "@remix-run/node";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

const url = "static/media/investigations";

export default function Cases() {
	return (
		<div className="page cases">
			<h1>Our Cases</h1>
			<hr />
			<h1 id="1997">1997</h1>
			<h2>Rosewell, New Mexico, USA</h2>
			<section className="investigations gallery">
				<div>
					<img
						src={`${url}/1997_roswell/1.jpg`}
						alt="View from RAAF to New Mexico desert near Roswell crash site"
						title="Looking out from Roswell Army Air Field into the desert"
					/>
					<p>
						<i>
							Looking out from Roswell Army Air Field into the
							desert
						</i>
					</p>
				</div>
				<div>
					<img
						src={`${url}/1997_roswell/2.jpg`}
						alt="View from RAAF to New Mexico desert near Roswell crash site"
						title="Looking out from Roswell Army Air Field into the desert"
					/>
					<p>
						<i>
							Looking out from Roswell Army Air Field into the
							desert
						</i>
					</p>
				</div>
			</section>
		</div>
	);
}
