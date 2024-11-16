import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const CharlestonJail: Case = {
	year: 2024,
	render: () => {
		return (
			<CaseView
				year={CharlestonJail.year}
				location={{
					site: "Charleston Jail",
					town: "Charleston",
					state: "South Carolina",
				}}
				images={[
					{
						src: `${baseUrl}/2024_charleston_jail/1.jpg`,
						alt: "Night shot of the front facade of the building",
						description:
							"Outside the jail at night, certainly imposing",
					},
					{
						src: `${baseUrl}/2024_charleston_jail/4.jpg`,
						alt: "Heading up the exterior staircase towards the jail cells",
						description:
							"Heading up the exterior staircase towards the jail cells",
					},
					{
						src: `${baseUrl}/2024_charleston_jail/5.jpg`,
						alt: "A view of some reconstructed jail cells",
						description:
							"A view of some reconstructed jail cells, stay hydrated",
					},
				]}
			/>
		);
	},
};
