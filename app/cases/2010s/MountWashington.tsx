import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

export const MountWashington: Case = {
	year: 2019,
	render: () => {
		return (
			<CaseView
				year={MountWashington.year}
				location={{
					site: "Mount Washington Hotel",
					town: "Bretton Woods",
					state: "New Hampshire",
				}}
				images={[
					{
						src: `${baseUrl}/2019_mt_washington_hotel/1.png`,
						alt: "Greg & Dana",
						description:
							"Greg and Dana Newkirk hosting an EVP session",
					},
					{
						src: `${baseUrl}/2019_mt_washington_hotel/2.jpeg`,
						alt: "The Driveway",
						description: "The cold drive leading up to the hotel",
					},
					{
						src: `${baseUrl}/2019_mt_washington_hotel/3.jpeg`,
						alt: "Entrance",
						description: "The grand entrance of the hotel",
					},
					{
						src: `${baseUrl}/2019_mt_washington_hotel/4.jpeg`,
						alt: "Upper terrace",
						description: "View looking out from the upper terrace",
					},
					{
						src: `${baseUrl}/2019_mt_washington_hotel/5.jpg`,
						alt: "Signed Book",
						description: "Book signing by Chip Coffey",
					},
					{
						src: `${baseUrl}/2019_mt_washington_hotel/8.jpeg`,
						alt: "View of outside",
						description:
							"View of the hotel in all its imposing glory",
					},
					{
						src: `${baseUrl}/2019_mt_washington_hotel/9.jpeg`,
						alt: "Hosts - 1",
						description:
							"Greg Newkirk, Dana Newkirk, Amy Bruni, Adam Berry, John E. L. Tenney (hosts)",
					},
					{
						src: `${baseUrl}/2019_mt_washington_hotel/10.jpeg`,
						alt: "Hosts - 2",
						description: "Maryann with Amy and Adam",
					},
				]}
			/>
		);
	},
};
