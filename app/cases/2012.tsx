import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const C2012 = () => {
	return (
		<ACase
			year={2012}
			location={{
				site: "Techatticup Mine",
				town: "Nelson",
				state: "Nevada",
			}}
			images={[
				{
					src: `${baseUrl}/2012_techatticup_mine_nevada/1.jpg`,
					alt: "Museum shop",
					description: "At the museum before dark",
				},
			]}
		/>
	);
};
