import { ACase } from "./ACase";
import baseUrl from "./baseUrl";

export const Cases2012 = () => {
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
					alt: "",
					description: "",
				},
			]}
		/>
	);
};
