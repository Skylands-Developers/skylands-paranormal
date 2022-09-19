import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const Cases2018 = () => {
	return (
		<ACase
			year={2018}
			location={{
				site: "Pennhurst State School & Hospital",
				town: "Spring City",
				state: "Pennsylvania",
			}}
			images={[
				{
					src: `${baseUrl}/2018_pennhurst/1.jpg`,
					alt: "",
					description: "",
				},
			]}
		/>
	);
};
