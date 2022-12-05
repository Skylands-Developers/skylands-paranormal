import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const BaladerryInn: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				year={BaladerryInn.year}
				location={{
					site: "Baladerry Inn",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2022_baladerry_inn/1.jpeg`,
						alt: "",
						description: "Under evidence review",
					},
				]}
			/>
		);
	},
};
