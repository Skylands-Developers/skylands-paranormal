import baseUrl from "../baseUrl";
import { CaseView } from "../CaseView";
import type { Case } from "../types";

const FOLDER = "2022_field_hospital";
export const FarmhouseHospital: Case = {
	year: 2022,
	render: () => {
		return (
			<CaseView
				underReview
				year={FarmhouseHospital.year}
				location={{
					site: "Farmhouse Field Hospital",
					town: "Gettysburg",
					state: "Pennsylvania",
				}}
				images={[
					{
						src: `${baseUrl}/${FOLDER}/1.jpg`,
						alt: "Laser grid on walls, EVP session, first floor",
						description:
							"First floor of the farm house, laser grid with EVP session",
					},
					{
						src: `${baseUrl}/${FOLDER}/2.jpg`,
						alt: "Figure knealing, EVP session, attic cubby",
						description:
							"Attic cubby, figure on SLS appearing to kneal",
					},
					{
						src: `${baseUrl}/${FOLDER}/3.jpg`,
						alt: "Two figures, EVP session, attic cubby",
						description:
							"Attic cubby, two figures on SLS appearing to embrace",
					},
				]}
				audios={[
					{
						description:
							'Attic EVP Session, Recorder 1, what sounds like a whisper, after Jason says "the other hand\'s going up too"',
						src: `${baseUrl}/${FOLDER}/megan-or-evp-rec1.mp3`,
					},
					{
						description:
							"Attic EVP Session, Recorder 2, barely captured the same whisper, which credits against it being Megan",
						src: `${baseUrl}/${FOLDER}/megan-or-evp-rec2.mp3`,
					},
					{
						description:
							"Attic EVP Session, slight scratching that a few members heard",
						src: `${baseUrl}/${FOLDER}/scratching.mp3`,
					},
					{
						description:
							"Attic EVP Session, scratching with reduced noise and amplification",
						src: `${baseUrl}/${FOLDER}/scratching-cleaned-up.mp3`,
					},
				]}
				videos={[
					"https://www.youtube.com/embed/tPyYeVVv_zM",
					"https://www.youtube.com/embed/nsJDPiarbFU",
					"https://www.youtube.com/embed/yXwRIGBLEns",
				]}
			/>
		);
	},
};
