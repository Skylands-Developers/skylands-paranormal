import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
} from "@remix-run/react";
import type { ReactNode } from "react";
import { Navigation } from "./navigation";
import home_styles from "./styles/home.css";
import nav_styles from "./styles/navigation.css";
import main_styles from "./styles/sp.css";

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: main_styles },
		{ rel: "stylesheet", href: nav_styles },
		{ rel: "stylesheet", href: home_styles },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css?family=Montserrat",
		},
	];
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Skylands Paranormal",
	viewport: "width=device-width,initial-scale=1",
});

function Document({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>{children}</body>
		</html>
	);
}

export default function App() {
	return (
		<Document>
			<header>
				<Navigation />
			</header>
			<Outlet />
			<ScrollRestoration />
			<Scripts />
			<LiveReload />
		</Document>
	);
}

//Handle expected errors
export function CatchBoundary() {
	const caught = useCatch();
	return (
		<Document>
			<div className="error-page">
				<section>
					<img
						className="sp-banner"
						alt="Skylands Paranormal Logo"
						src="../../static/media/logos/skylands-paranormal-logo-color.svg"
					/>
					<h1>{caught ? caught.status : ""}</h1>
					<span>{caught ? caught.statusText : ""}</span>
					<p>
						Looks like you got lost in the dark! Let's head back to{" "}
						<Link to="/">base camp</Link>.
					</p>
				</section>
			</div>
			<Scripts />
		</Document>
	);
}

//Handle unexpected errors
export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error);
	return (
		<Document>
			<div className="page">
				<section>
					<pre>{error.message}</pre>
				</section>
			</div>
			<Scripts />
		</Document>
	);
}
