import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const WhiteHill: Case = {
	year: 2019,
	render: () => {
		return (
			<CaseView
				year={WhiteHill.year}
				location={{
					site: "White Hill Mansion",
					town: "Fieldsboro",
					state: "New Jersey",
				}}
				images={[
					{
						src: `${baseUrl}/2019_white_hill/1.png`,
						alt: "Basement - EVP",
						description:
							"Ashley and Jason performing an EVP session in the basement",
					},
					{
						src: `${baseUrl}/2019_white_hill/2.png`,
						alt: "Brian - Spirit Box",
						description:
							"Brian conducting Estes Spirit Box session in the attic",
					},
				]}
				videos={[
					"https://www.youtube.com/embed/0bBZ3FMPvpI",
					"https://www.youtube.com/embed/hp3lYZLb7rQ",
				]}
			/>
		);
	},
};
