import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2011 = () => {
	return (
		<ACase
			year={2011}
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
					description: "A tight stairwell leading to upper ramparts",
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
					description: "Down the hallways leading near the dry ditch",
				},
			]}
		/>
	);
};
