import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2010 = () => {
	return (
		<ACase
			year={2010}
			location={{
				site: "Eastern State Penitentiary",
				town: "Philadelphia",
				state: "Pennsylvania",
			}}
			images={[
				{
					src: `${baseUrl}/2010_eastern_state_pen/1.jpg`,
					alt: "Eastern State Group Hunt",
					description: "The group at Eastern State with Ben Hansen",
				},
			]}
		/>
	);
};
