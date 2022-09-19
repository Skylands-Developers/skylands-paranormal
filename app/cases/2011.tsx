import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const Cases2011 = () => {
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
					alt: "",
					description: "",
				},
				{
					src: `${baseUrl}/2011_fort_henry_kingston_ontario/2.jpg`,
					alt: "",
					description: "",
				},
				{
					src: `${baseUrl}/2011_fort_henry_kingston_ontario/3.jpg`,
					alt: "",
					description: "",
				},
				{
					src: `${baseUrl}/2011_fort_henry_kingston_ontario/4.jpg`,
					alt: "",
					description: "",
				},
			]}
		/>
	);
};
