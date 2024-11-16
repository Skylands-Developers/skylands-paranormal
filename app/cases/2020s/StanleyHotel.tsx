import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

const FOLDER = "2024_stanley_estes";
export const StanleyHotel: Case = {
	year: 2024,
	render: () => {
		return (
			<CaseView
				year={StanleyHotel.year}
				location={{
					site: "Stanley Hotel",
					town: "Estes Park",
					state: "Colorado",
				}}
				images={[
					{
						src: `${baseUrl}/${FOLDER}/0.jpg`,
						alt: "Spooky uplighting during the middle of the night, red, front of the main hotel building",
						description:
							"Outside the hotel in the middle of the night, red uplighting for a spooky touch",
					},
					{
						src: `${baseUrl}/${FOLDER}/3.jpg`,
						alt: "Inside the hotel lobby during the middle of the night",
						description:
							"The hotel lobby, waiting for that staircase apparition",
					},
					{
						src: `${baseUrl}/${FOLDER}/4.jpg`,
						alt: "A view down the 4th floor hallway",
						description:
							"A view down the 4th floor hallway, in between 3 haunted rooms",
					},
				]}
				audios={[
					{
						description:
							"4th Floor Recording Session, what sounds like a child running down the hall, none observed (whistling is AC)",
						src: `${baseUrl}/${FOLDER}/running.mp3`,
					},
					{
						description:
							"4th Floor Recording Session, what sounds like a child running after we hear voices outside",
						src: `${baseUrl}/${FOLDER}/voices-running.mp3`,
					},
					{
						description:
							"4th Floor Recording Session, what sounds like a loud bump, could have been a door closing but sounds very close",
						src: `${baseUrl}/${FOLDER}/loud-bump.mp3`,
					},
				]}
			/>
		);
	},
};
