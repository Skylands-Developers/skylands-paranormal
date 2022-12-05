import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const EasternState: Case = {
	year: 2010,
	render: () => {
		return (
			<CaseView
				year={EasternState.year}
				location={{
					site: "Eastern State Penitentiary",
					town: "Philadelphia",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2010_eastern_state_pen/1.jpg`,
						alt: "Eastern State Group Hunt",
						description:
							"The group at Eastern State with Ben Hansen",
					},
				]}
			/>
		);
	},
};
