import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { Navigation } from "./navigation";
import home_styles from "./styles/home.css";
import nav_styles from "./styles/navigation.css";
import main_styles from "./styles/sp.css";

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: main_styles },
		{ rel: "stylesheet", href: nav_styles },
		{ rel: "stylesheet", href: home_styles },
	];
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Skylands Paranormal",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Navigation />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
