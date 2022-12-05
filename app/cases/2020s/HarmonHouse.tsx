import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const HarmonHouse: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				year={HarmonHouse.year}
				location={{
					site: "Debra Harmon House",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2022_debra_harmon_house/1.jpeg`,
						alt: "",
						description: "Under evidence review",
					},
				]}
			/>
		);
	},
};
