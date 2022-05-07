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
import styles from "./styles/sp.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: styles }];
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
