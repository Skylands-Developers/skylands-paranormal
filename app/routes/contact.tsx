import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};
export default function Contact() {
	return (
		<div className="contact">
			<Outlet />
		</div>
	);
}
