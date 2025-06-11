import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

const FOLDER = "2025_womens_club_pt1";
export const WomensClubMorrisownPt1: Case = {
	year: 2025,
	render: () => {
		return (
			<CaseView
				year={WomensClubMorrisownPt1.year}
				location={{
					site: "Women's Club",
					town: "Morristown",
					state: "New Jersey",
				}}
				images={[
					{
						src: `${baseUrl}/${FOLDER}/0.jpg`,
						alt: "The main hallway of the ground floor of the club",
						description:
							"The club main hall, setting up for an EVP session",
					},
					{
						src: `${baseUrl}/${FOLDER}/1.jpg`,
						alt: "Basement EVP session in the club",
						description: "Basement EPVP session in the club",
					},
					{
						src: `${baseUrl}/${FOLDER}/3.jpg`,
						alt: "SLS usage in one of the rooms of the club",
						description:
							"SLS usage in one of the rooms of the club",
					},
				]}
				audios={[
					{
						description:
							"Attic Recording Session, an echoed response is given to us saying 'Good evening'",
						src: `${baseUrl}/${FOLDER}/good-evening.wav`,
					},
					{
						description:
							"Attic Recording Session, a response is given to us asking 'Are you here with us?'",
						src: `${baseUrl}/${FOLDER}/are-you-here.wav`,
					},
					{
						description:
							"Basement Recording Session, some whisper after us asking 'Did you use to come to this house?'",
						src: `${baseUrl}/${FOLDER}/did-you.wav`,
					},
					{
						description:
							"Solo Recording Session, sounds like someone prefers to be addressed a certain way",
						src: `${baseUrl}/${FOLDER}/congressman.wav`,
					},
				]}
			/>
		);
	},
};
