import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const TechatticupMine: Case = {
	year: 2012,
	render: () => {
		return (
			<CaseView
				year={TechatticupMine.year}
				location={{
					site: "Techatticup Mine",
					town: "Nelson",
					state: "Nevada",
				}}
				images={[
					{
						src: `${baseUrl}/2012_techatticup_mine_nevada/1.jpg`,
						alt: "Museum shop",
						description: "At the museum before dark",
					},
				]}
			/>
		);
	},
};
