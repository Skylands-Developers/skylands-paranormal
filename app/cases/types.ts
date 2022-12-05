export type CaseImage = {
	src: string;
	alt: string;
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
	location: CaseLocation;
	images: CaseImage[];
	videos?: string[];
	underReview?: boolean;
};
export interface Case {
	year: CaseProps["year"];
	render: () => JSX.Element;
}
