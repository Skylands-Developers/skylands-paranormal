import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const Roswell: Case = {
	year: 1997,
	render: () => {
		return (
			<CaseView
				year={Roswell.year}
				location={{
					site: "RAAF",
					town: "Roswell",
					state: "New Mexico",
				}}
				images={[
					{
						src: `${baseUrl}/1997_roswell/1.jpg`,
						alt: "View from RAAF to New Mexico desert near Roswell crash site",
						description:
							"Looking out from Roswell Army Air Field into the desert",
					},
					{
						src: `${baseUrl}/1997_roswell/2.jpg`,
						alt: "RAAF Hanger 84",
						description: "At RAAF looking at Hangar 84",
					},
				]}
			/>
		);
	},
};
