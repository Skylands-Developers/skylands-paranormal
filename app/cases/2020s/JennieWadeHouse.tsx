import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const JennieWade: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				underReview
				year={JennieWade.year}
				location={{
					site: "Jennie Wade's Homes",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/2022_jennie_wade/1.jpg`,
						alt: "Original home of 'Jennie'",
						description:
							"Original home of Mary Virginia 'Jennie' Wade, Baltimore Ave, Gettysburg",
					},
					{
						src: `${baseUrl}/2022_jennie_wade/2.jpg`,
						alt: "Georgia Wade McClellan's Home",
						description:
							"Jennie's sister, Georgia McClellan's home near the edge of Gettysburg where she was fatally injured in 1863",
					},
					{
						src: `${baseUrl}/2022_jennie_wade/3.jpg`,
						alt: "Figure detected upstairs on nightstand",
						description:
							"An anomoly detected, child-sized, reafirming tour guide's personal experiences on the second floor, SLS device",
					},
					{
						src: `${baseUrl}/2022_jennie_wade/4.jpg`,
						alt: "Figure detected upstairs on nightstand, #2",
						description:
							"Anomoly appears to be sitting on nightstand on the second floor bedroom, SLS device",
					},
				]}
			/>
		);
	},
};
