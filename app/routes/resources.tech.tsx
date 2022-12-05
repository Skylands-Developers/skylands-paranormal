import type { LinksFunction } from "@remix-run/node";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Tech() {
	return (
		<div className="page tech">
			<h1>Investigation Technology</h1>
			<hr />
			<section>
				<img
					className="image-link"
					alt="Technologies"
					title="Technologies"
					src="../static/media/misc/photo-1455040_960_720.jpg"
				/>
			</section>
			<hr />
			<section>
				<h2>Visual</h2>
				<p>
					Equipment related to video recordings and light-related
					experimentation would fall into this category
				</p>
				<ul style={{ listStyle: "none" }}>
					<li>Video Camera (2K, 4K, 30+ Megapixels)</li>
					<li>Infrared (IR) Lights</li>
					<li>Visible Spectrum Flashlight (LED/Incandescent)</li>
					<li>Full Spectrum Camera</li>
					<li>Polaroid Instant Camera</li>
					<li>Motion Sensor</li>
					<li>Structured Light Sensor (SLS)</li>
					<li>Laser (Grid)</li>
					<li>Mirror (Psychomanteum)</li>
				</ul>
			</section>
			<section>
				<h2>Audible</h2>
				<p>
					Equipment related to audio recordings and sound-related
					experimentation would fall into this category
				</p>
				<ul style={{ listStyle: "none" }}>
					<li>Digital Recorder</li>
					<li>Directional Microphones</li>
					<li>Parabolic Microphone (niche)</li>
					<li>Two-way Radio (Walkie-talkie)</li>
					<li>ITC (Instrumental TransCommunication)</li>
					<li>Spirit Box</li>
					<li>Other EVP Sensors</li>
				</ul>
			</section>
			<section>
				<h2>Energy</h2>
				<p>
					Equipment related to energy recordings and energy-related
					experimentation would fall into this category
				</p>
				<ul style={{ listStyle: "none" }}>
					<li>Mel Meter REM-ATDD</li>
					<li>REM Pod</li>
					<li>K-II EMF Meter</li>
					<li>TriField TF2 EMF Meter</li>
					<li>Static Field Meter</li>
				</ul>
			</section>
			<section>
				<h2>Thermal</h2>
				<p>
					Equipment related to temperature recordings and
					temperature-related experimentation would fall into this
					category
				</p>
				<ul style={{ listStyle: "none" }}>
					<li>FLIR Thermal Camera</li>
					<li>Mel Meter</li>
					<li>EDI Meter</li>
					<li>Ranged Thermometer</li>
					<li>Ambient Thermometer</li>
				</ul>
			</section>
			<section>
				<h2>Tactile</h2>
				<p>
					Equipment related to touch or vibration recordings and
					touch-related experimentation would fall into this category
				</p>
				<ul style={{ listStyle: "none" }}>
					<li>Dowsing Rods</li>
					<li>Pendulum</li>
					<li>Geophone</li>
					<li>Motion Light</li>
				</ul>
			</section>
		</div>
	);
}
