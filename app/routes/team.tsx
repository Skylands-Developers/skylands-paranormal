import type { LinksFunction } from "@remix-run/node";
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
		titles: ["Founder"],
	},
	{
		name: "Dean",
		titles: ["Co-Lead Investigator"],
	},
	{
		name: "Evan",
		titles: ["Co-Lead Investigator", "Tech Lead"],
	},
	{
		name: "Brian",
		titles: ["Co-Lead Investigator", "Researcher"],
	},
	{
		name: "Sarah",
		titles: ["Spiritual Cleanser"],
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
	return (
		<div className="page team">
			<h1>The Team</h1>
			<hr />
			<section>
				<img
					alt="Team Banner (outside White Hill Mansion)"
					width={"100%"}
					src="static/media/profiles/team_banner.jpg"
				/>
				<p style={{ textAlign: "center" }}>
					<i>The team at White Hill Mansion, Fieldsboro, NJ 2019</i>
				</p>
			</section>
			<hr />
			<section className="gallery">
				{teamMembers.map((member) => (
					<div key={member.name}>
						{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
						<img
							alt={`Profile picture of ${member.name}`}
							src={`static/media/profiles/${member.name.toLowerCase()}.jpg`}
						/>
						<h2>{member.name}</h2>
						<p>
							<i>{member.titles.join(",")}</i>
						</p>
					</div>
				))}
			</section>
		</div>
	);
}
