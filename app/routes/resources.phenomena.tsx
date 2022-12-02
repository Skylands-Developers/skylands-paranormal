import type { LinksFunction } from "@remix-run/node";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Phenomena() {
	return (
		<div className="page phenomena">
			<section>
				<h1>The Supernatural</h1>
				<img
					className="image-link"
					alt="Phenomena"
					title="Phenomena"
					style={{ maxWidth: "800px" }}
					src="../static/media/misc/pexels-photo-745054.jpeg"
				/>
			</section>
			<section>
				<p>
					Whether you talk about spirits, cryptids, unidentified
					objects, or psychic abilities, these all fall under the
					realm of Supernatural phenomena. Any experiences, personal
					or recorded, that defy the explanation of logic and/or
					science can be considered as such. This field, many
					professionals which consider it a pseudo-science, has new
					discoveries every year that you are free to believe or
					ignore. Below are some categorizations that are interpreted
					differently by different groups, but share common threads.
				</p>
			</section>
			<section>
				<h2>Spirits</h2>
			</section>
			<section style={{ width: "100%" }}>
				<h3>Under Construction</h3>
				<h4>
					Residual, Intelligent, Poltergeist, Doppleganger/Mimic,
					Shadows, Demonic Hauntings
				</h4>
			</section>
			<hr />
			<section>
				<h2>Cryptids</h2>
				<img
					className="image-link"
					alt="Cryptids"
					title="Cryptids"
					src="../static/media/misc/photo-1665245080999-3a5f0113b6d7.jpg"
				/>
			</section>
			<section style={{ width: "100%" }}>
				<h3>Under Construction</h3>
				<h4>Jersey Devil, Bigfoot, Mothman, Chupacabra</h4>
			</section>
			<hr />
			<section>
				<h2>UFOs</h2>
				<img
					className="image-link"
					alt="UFOs"
					title="UFOs"
					src="../static/media/misc/photo-1547235001-086f37fa0088.jpg"
				/>
			</section>
			<section style={{ width: "100%" }}>
				<h3>Under Construction</h3>
				<h4>Depictions in Art, Military, Civilian Sightings</h4>
			</section>
		</div>
	);
}
//https://paranormal.lovetoknow.com/Supernatural_Paranormal_Phenomenon
