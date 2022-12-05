import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const FarmhouseHospital: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				underReview
				year={FarmhouseHospital.year}
				location={{
					site: "Farmhouse Field Hospital",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2022_field_hospital/1.jpg`,
						alt: "Laser grid on walls, EVP session, first floor",
						description:
							"First floor of the farm house, laser grid with EVP session",
					},
				]}
			/>
		);
	},
};
