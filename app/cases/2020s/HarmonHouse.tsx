import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const HarmonHouse: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				underReview
				year={HarmonHouse.year}
				location={{
					site: "Debra Harmon House",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2022_debra_harmon_house/1.jpg`,
						alt: "Static field meter and Mel meter on second floor",
						description:
							"Second floor, family room, group EVP Session with Static and MEL Meters, active responses",
					},
				]}
			/>
		);
	},
};
