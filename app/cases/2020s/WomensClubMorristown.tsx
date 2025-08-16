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
						src: `${baseUrl}/${FOLDER}/4.jpg`,
						alt: "The facade of the home in Morristown, NJ",
						description: "The facade of the home in Morristown, NJ",
					},
					{
						src: `${baseUrl}/${FOLDER}/2.jpg`,
						alt: "The main hallway of the ground floor of the club",
						description:
							"The club main hall, setting up for an EVP session",
					},
					{
						src: `${baseUrl}/${FOLDER}/1.jpg`,
						alt: "Basement EVP session in the club",
						description: "Basement EVP session in the club",
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
							"Solo Recording Session, front room, sounds like someone prefers to be addressed a certain way",
						src: `${baseUrl}/${FOLDER}/congressman.wav`,
					},
				]}
			/>
		);
	},
};

const FOLDER2 = "2025_womens_club_pt2";
export const WomensClubMorrisownPt2: Case = {
	year: 2025,
	render: () => {
		return (
			<CaseView
				underReview
				year={WomensClubMorrisownPt2.year}
				location={{
					site: "Women's Club",
					town: "Morristown",
					state: "New Jersey",
				}}
				images={[
					{
						src: `${baseUrl}/${FOLDER2}/0.jpg`,
						alt: "Main hall staircase, set up for physical evidence capture",
						description:
							"Attempting to capture physical manipulation of balls on the main floor staircase, using IR video camera",
					},
					{
						src: `${baseUrl}/${FOLDER2}/1.jpg`,
						alt: "Evan and Jason in the Drawing Room",
						description:
							"Evan, Jason, and Sarah (not pictured) conducting a Call and Response session in the Drawing Room",
					},
					{
						src: `${baseUrl}/${FOLDER2}/2.jpg`,
						alt: "Introductory session, EMF meters, baseline reading",
						description:
							"EMF meters before introductory session and reading of collected history on home, showing baseline levels",
					},
					{
						src: `${baseUrl}/${FOLDER2}/3.jpg`,
						alt: "Introductory session, EMF meters, elevated reading",
						description:
							"EMF meters during introductory session of historical recollection, recalling dates and notable people and acheivements, showing elevated levels",
					},
					{
						src: `${baseUrl}/${FOLDER2}/4.jpg`,
						alt: "Basement bowling alley, very creepy",
						description:
							"EVP session in the bowling alley in the basement, very odd feelings down here",
					},
					{
						src: `${baseUrl}/${FOLDER2}/5.jpg`,
						alt: "Laser grid and music experiment in Theatre Room",
						description:
							"Recording for any activity in the Theatre Room, using historical music, laser grid, and IR video camera",
					},
					{
						src: `${baseUrl}/${FOLDER2}/6.jpg`,
						alt: "Dean and Jason in Theatre Room",
						description:
							"Dean and Jason investing the stage inciting people to dance to the historical music being played",
					},
					{
						src: `${baseUrl}/${FOLDER2}/7.jpg`,
						alt: "Basement recording session",
						description:
							"First basement recording session, trying to recreate the personal experiences that occurred the previous investigation",
					},
					{
						src: `${baseUrl}/${FOLDER2}/8.jpg`,
						alt: "Trying to use trigger objects during sessions",
						description:
							"Old books can make great trigger objects, these were used during one of the Estes sessions in the Living Room",
					},
					{
						src: `${baseUrl}/${FOLDER2}/9.jpg`,
						alt: "Group Estes session in Living Room",
						description: "Group Estes session in the Living Room",
					},
				]}
				audios={[
					{
						description:
							"Drawing Room, Estes method, group makes brief contact with Peter Condict",
						src: `${baseUrl}/${FOLDER2}/peter-estes-longer.wav`,
					},
					{
						description:
							"Drawing Room, Estes method, group explains the devices, and the previous tennants think it's weird",
						src: `${baseUrl}/${FOLDER2}/ghosts-scientists-weird.wav`,
					},
					{
						description:
							"Drawing Room, Estes method, in between conversations a faint whistling (audio enhanced) picked up",
						src: `${baseUrl}/${FOLDER2}/someone-whistling.wav`,
					},
					{
						description:
							"Basement recorder, left unatended for around 40 minutes, strange ringing sound",
						src: `${baseUrl}/${FOLDER2}/basement-bell-sound.wav`,
					},
				]}
			/>
		);
	},
};
