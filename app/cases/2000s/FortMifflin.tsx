import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";

import type { Case } from "../types";

export const FortMifflin: Case = {
	year: 2009,
	render: () => {
		return (
			<CaseView
				year={FortMifflin.year}
				location={{
					site: "Fort Mifflin",
					town: "Philadelphia",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2009_fort_mifflin/1.jpg`,
						alt: "Fort Mifflin Signing",
						description:
							"Evan and Brian meeting Jason Hawes and Grant Wilson from Ghost Hunters",
					},
				]}
			/>
		);
	},
};
