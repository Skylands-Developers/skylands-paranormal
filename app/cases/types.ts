export type CaseImage = {
	src: string;
	alt: string;
	description: string;
};
export type CaseAudio = {
	src: string;
	description: string;
};
export type CaseLocation = {
	site: string;
	town: string;
	state: string; //or province
	country?: string;
};
export type CaseProps = {
	year: number;
	month?: number;
	location: CaseLocation;
	images: CaseImage[];
	audios?: CaseAudio[];
	videos?: string[];
	underReview?: boolean;
};
export interface Case {
	year: CaseProps["year"];
	month?: CaseProps["month"];
	render: () => JSX.Element;
}
