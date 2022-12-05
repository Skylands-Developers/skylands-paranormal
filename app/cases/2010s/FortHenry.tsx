import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const FortHenry: Case = {
	year: 2011,
	render: () => {
		return (
			<CaseView
				year={FortHenry.year}
				location={{
					site: "Fort Henry",
					town: "Kingston",
					state: "Ontario",
					country: "Canada",
				}}
				images={[
					{
						src: `${baseUrl}/2011_fort_henry_kingston_ontario/1.jpg`,
						alt: "Wall View Sunset",
						description: "An overlook of Kingston from the wall",
					},
					{
						src: `${baseUrl}/2011_fort_henry_kingston_ontario/2.jpg`,
						alt: "Stairwell",
						description:
							"A tight stairwell leading to upper ramparts",
					},
					{
						src: `${baseUrl}/2011_fort_henry_kingston_ontario/3.jpg`,
						alt: "Courtyard",
						description:
							"A look at the courtyard from the West Officer's Quarters",
					},
					{
						src: `${baseUrl}/2011_fort_henry_kingston_ontario/4.jpg`,
						alt: "Hallway",
						description:
							"Down the hallways leading near the dry ditch",
					},
				]}
			/>
		);
	},
};
