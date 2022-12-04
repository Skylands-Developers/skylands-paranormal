import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2022 = () => {
	return (
		<ACase
			year={2022}
			location={{
				site: "Farmhouse Field Hospital",
				town: "Gettysburg",
				state: "Pennsylvania",
			}}
			images={[
				{
					src: `${baseUrl}/2022_field_hospital/1.jpeg`,
					alt: "Base",
					description: "Investigator performing experiment",
				},
			]}
		/>
	);
};
