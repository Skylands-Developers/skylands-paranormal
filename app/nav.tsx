import { Link } from "@remix-run/react";

export function GlobalNav() {
	return (
		<nav>
			<Link prefetch="intent" to="/">
				Home
			</Link>
			<Link prefetch="intent" to="/about">
				About
			</Link>
			<Link prefetch="intent" to="/team">
				The Team
			</Link>
			<Link prefetch="intent" to="/investigations">
				Our Investigations
			</Link>
			<Link prefetch="intent" to="/resources">
				Resources
			</Link>
			<Link prefetch="intent" to="/contact">
				Contact Us
			</Link>
		</nav>
	);
}
