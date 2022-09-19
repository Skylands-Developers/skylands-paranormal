import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const Cases2007 = () => {
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
					alt: "",
					description: "",
				},
				{
					src: `${baseUrl}/2007_alcatraz_island/2.jpg`,
					alt: "",
					description: "",
				},
			]}
		/>
	);
};
