import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const Cases2009 = () => {
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
					src: `${baseUrl}/2007_fort_mifflin/1.jpg`,
					alt: "",
					description: "",
				},
			]}
		/>
	);
};
