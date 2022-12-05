import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const Alcatraz: Case = {
	year: 2007,
	render: () => {
		return (
			<CaseView
				year={Alcatraz.year}
				location={{
					site: "Alcatraz Island",
					town: "San Francisco",
					state: "California",
				}}
				images={[
					{
						src: `${baseUrl}/2007_alcatraz_island/1.jpg`,
						alt: "Alcatraz Guard Tower",
						description:
							"A view of a guard tower watching for escapees",
					},
					{
						src: `${baseUrl}/2007_alcatraz_island/2.jpg`,
						alt: "Alcatraz Cell Block D",
						description:
							"Peering into the isolation rooms of Cell Block D",
					},
				]}
			/>
		);
	},
};
