import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

type ParanormalPersonality = {
	name: string;
	members: string[];
};
const personalities: ParanormalPersonality[] = [
	{
		name: "Ghost Hunters'",
		members: [
			"Jason Hawes",
			"Grant Wilson",
			"Steve Gonsalves",
			"Dave Tango",
			"Kris Williams",
		],
	},
	{
		name: "Planet Weird's",
		members: ["Greg Newkirk", "Dana Newkirk"],
	},
	{
		name: "Kindred Spirits'",
		members: ["Amy Bruni", "Adam Berry", "Chip Coffey"],
	},
	{
		name: "Fact or Faked's",
		members: ["Ben Hansen", "Bill Murphy"],
	},
	{
		name: "Haunted Collector's",
		members: ["John Zaffis"],
	},
	{
		name: "Weird Lecture's",
		members: ["John E. L. Tenney"],
	},
];

export default function About() {
	return (
		<div className="page about">
			<h1>About</h1>
			<hr />
			<section>
				<p>
					Skylands Paranormal is a team of paranormal investigators
					who share interest in haunted investigations and ufology.
				</p>
			</section>
			<section className="gallery">
				<img
					alt="Driving through the fog"
					src="static/media/misc/photo-1565539662021-d2598c11f85a.jpg"
				/>
				<img
					alt="mansion"
					src="static/media/misc/photo-1542071519-65d063713e4e.jpg"
				/>
			</section>
			<section>
				<p>
					We at Skylands Paranormal have been interested in the field
					for decades. Investigations on the team date back to the
					1970's, yielding some inexplicable personal experiences that
					relate to what we now know as the paranormal. Knowledge of
					the field was not as widely known as it is today, as more
					public media is being documented. Our understanding of the
					paranormal field will continue to grow, and it is our
					mission to document our experiences and share the knowledge
					with others. Since 2007, the team has been attending
					paranormal events and investigations all around the United
					States. See all of our investigations and collected
					findings/evidence <Link to="/cases">here</Link>.
				</p>
			</section>
			<hr />
			<section>
				<p>
					Among our own investigations, we have experienced the
					paranormal and personal sessions with:
				</p>
				<table id="personalities">
					<tbody>
						{personalities.map((p) => (
							<tr key={p.name}>
								<td>
									<h2>{p.name}</h2>
									<ul>
										{p.members.map((member) => (
											<li key={member}>{member}</li>
										))}
									</ul>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	);
}
