import type { LinksFunction } from "@remix-run/node";
import { Cases1997 } from "../cases/1997";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function Cases() {
	return (
		<div className="page cases">
			<h1>Our Cases</h1>
			<hr />
			{Cases1997()}
		</div>
	);
}
