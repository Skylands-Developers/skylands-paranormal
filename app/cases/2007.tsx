import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2007 = () => {
	return (
		<ACase
			year={2007}
			location={{
				site: "Alcatraz Island",
				town: "San Francisco",
				state: "California",
			}}
			images={[
				{
					src: `${baseUrl}/2007_alcatraz_island/1.jpg`,
					alt: "Alcatraz Guard Tower",
					description:
						"A view of a guard tower watching for escapees",
				},
				{
					src: `${baseUrl}/2007_alcatraz_island/2.jpg`,
					alt: "Alcatraz Cell Block D",
					description:
						"Peering into the isolation rooms of Cell Block D",
				},
			]}
		/>
	);
};
