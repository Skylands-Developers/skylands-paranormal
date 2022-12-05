import type { LinksFunction } from "@remix-run/node";
import { allCases } from "../cases";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Cases() {
	//Not a big deal to sort through < 40 elements from earliest to latest
	const sortedCases = allCases.sort((a, b) => {
		return b.year - a.year;
	});
	return (
		<div className="page cases">
			<h1>Our Cases</h1>
			<hr />
			{sortedCases.map((f) => f.render())}
		</div>
	);
}
