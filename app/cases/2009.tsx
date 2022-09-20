import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2009 = () => {
	return (
		<ACase
			year={2009}
			location={{
				site: "Fort Mifflin",
				town: "Philadelphia",
				state: "Pennsylvania",
			}}
			images={[
				{
					src: `${baseUrl}/2009_fort_mifflin/1.jpg`,
					alt: "Fort Mifflin Signing",
					description: "Evan and Brian meeting Jason and Grant",
				},
			]}
		/>
	);
};
