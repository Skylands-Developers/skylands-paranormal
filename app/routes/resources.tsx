import type { LinksFunction } from "@remix-run/node";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};
export default function Resources() {
	return (
		<div className="page resources">
			<h1>Under construction!</h1>
		</div>
	);
}
