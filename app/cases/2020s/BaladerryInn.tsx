import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const BaladerryInn: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				underReview
				year={BaladerryInn.year}
				location={{
					site: "Baladerry Inn",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2022_baladerry_inn/1.jpg`,
						alt: "Baladerry Inn Original Structure, 1812",
						description:
							"Main structure from 1812, taken on site in December",
					},
					{
						src: `${baseUrl}/2022_baladerry_inn/2.jpg`,
						alt: "Baladerry Inn Gazebo",
						description:
							"Inns's Gezebo near Tennis Courts, where documented soldiers are buried nearby- EVPs recorded here",
					},
				]}
				videos={[
					"https://www.youtube.com/embed/vdmeSzN1mo8",
					"https://www.youtube.com/embed/vOvFuimGjHs",
				]}
			/>
		);
	},
};
