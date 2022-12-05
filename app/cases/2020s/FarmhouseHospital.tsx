import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const FarmhouseHospital: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				year={FarmhouseHospital.year}
				location={{
					site: "Farmhouse Field Hospital",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2022_field_hospital/1.jpeg`,
						alt: "",
						description: "Under evidence review",
					},
				]}
			/>
		);
	},
};
