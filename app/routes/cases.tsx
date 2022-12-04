import type { LinksFunction } from "@remix-run/node";
import * as RecordedCases from "../cases";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Cases() {
	return (
		<div className="page cases">
			<h1>Our Cases</h1>
			<hr />
			{RecordedCases.C2022_2()}
			{RecordedCases.C2022()}
			{RecordedCases.C2019_2()}
			{RecordedCases.C2019()}
			{RecordedCases.C2018()}
			{RecordedCases.C2012()}
			{RecordedCases.C2011()}
			{RecordedCases.C2010()}
			{RecordedCases.C2009()}
			{RecordedCases.C2007()}
			{RecordedCases.C1997()}
		</div>
	);
}
