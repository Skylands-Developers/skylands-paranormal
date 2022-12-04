import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2022_2 = () => {
	return (
		<ACase
			year={2022}
			location={{
				site: "Debbie Harmon House",
				town: "Gettysburg",
				state: "Pennsylvania",
			}}
			images={[
				{
					src: `${baseUrl}/2022_debbie_harmon_house/1.jpeg`,
					alt: "Base",
					description: "Investigator performing experiment",
				},
			]}
		/>
	);
};
