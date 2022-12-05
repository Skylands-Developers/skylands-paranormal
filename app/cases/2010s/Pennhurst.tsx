import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const Pennhurst: Case = {
	year: 2018,
	render: () => {
		return (
			<CaseView
				year={Pennhurst.year}
				location={{
					site: "Pennhurst State School & Hospital",
					town: "Spring City",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2018_pennhurst/1.jpg`,
						alt: "Team before the investigation",
						description:
							"Evan, Dean, Jason, Ashley, and Brian before the investigation",
					},
				]}
			/>
		);
	},
};
