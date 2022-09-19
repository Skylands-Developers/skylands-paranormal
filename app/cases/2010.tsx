import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const Cases2010 = () => {
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
					alt: "",
					description: "",
				},
			]}
		/>
	);
};
