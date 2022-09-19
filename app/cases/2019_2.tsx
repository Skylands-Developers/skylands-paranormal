import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const Cases2019_2 = () => {
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
					src: `${baseUrl}/2019_mt_washington_hotel/1.jpg`,
					alt: "",
					description: "",
				},
				{
					src: `${baseUrl}/2019_mt_washington_hotel/1.jpg`,
					alt: "",
					description: "",
				},
			]}
			videos={[
				"https://youtu.be/0bBZ3FMPvpI",
				"https://youtu.be/hp3lYZLb7rQ",
			]}
		/>
	);
};
