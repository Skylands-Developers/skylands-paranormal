import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2019_2 = () => {
	return (
		<ACase
			year={2019}
			location={{
				site: "White Hill Mansion",
				town: "Fieldsboro",
				state: "New Jersey",
			}}
			images={[
				{
					src: `${baseUrl}/2019_white_hill/1.png`,
					alt: "Basement - EVP",
					description:
						"Ashley and Jason performing an EVP session in the basement",
				},
				{
					src: `${baseUrl}/2019_white_hill/2.png`,
					alt: "Brian - Spirit Box",
					description:
						"Brian conducting Estes Spirit Box session in the attic",
				},
			]}
			// videos={[
			// 	"https://youtu.be/0bBZ3FMPvpI",
			// 	"https://youtu.be/hp3lYZLb7rQ",
			// ]}
		/>
	);
};
