import type { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

type TeamMember = {
	name: string;
	titles: string[];
};

const teamMembers: TeamMember[] = [
	{
		name: "Jason",
		titles: ["Founder", "Lead Investigator"],
	},
	{
		name: "Dean",
		titles: ["Lead Investigator"],
	},
	{
		name: "Evan",
		titles: ["Investigator", "Tech Lead"],
	},
	{
		name: "Brian",
		titles: ["Investigator", "Researcher"],
	},
	{
		name: "Sarah",
		titles: ["Investigator", "Spiritual Cleanser"],
	},
	{
		name: "Ashley",
		titles: ["Investigator", "Sensitive"],
	},
	{
		name: "Maryann",
		titles: ["Investigator", "Researcher"],
	},
	{
		name: "Stephanie",
		titles: ["Public Relations", "Team Coordinator"],
	},
];

export default function Team() {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const handleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};
	const bannerImage = (
		<img
			alt="The team at White Hill Mansion, Fieldsboro, NJ 2019"
			title="The team outside White Hill Mansion in Fieldsboro, NJ 2019"
			src="static/media/profiles/team_banner.jpg"
			onClick={handleFullscreen}
		/>
	);
	return (
		<div className="page team">
			<h1>The Team</h1>
			<hr />
			<section>
				{bannerImage}
				<p style={{ textAlign: "center" }}>
					<i>The team at White Hill Mansion, Fieldsboro, NJ 2019</i>
				</p>
				<dialog
					className={isFullscreen ? "dialog active" : "dialog"}
					open={isFullscreen}
					onClick={() => handleFullscreen()}
				>
					{bannerImage}
				</dialog>
			</section>
			<hr />
			<section className="gallery">
				{teamMembers.map((member) => (
					<div key={member.name}>
						{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
						<img
							alt={`Profile picture of ${member.name}`}
							title={`Profile picture of ${member.name}`}
							src={`static/media/profiles/${member.name.toLowerCase()}.jpg`}
						/>
						<h2>{member.name}</h2>
						<p>
							<i>{member.titles.join(", ")}</i>
						</p>
					</div>
				))}
			</section>
		</div>
	);
}
