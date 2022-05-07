import { NavLink } from "@remix-run/react";

export function GlobalNav() {
	return (
		<nav className="global-nav">
			<NavLink prefetch="intent" to="/" end>
				Home
			</NavLink>
			<NavLink prefetch="intent" to="/about">
				About
			</NavLink>
			<NavLink prefetch="intent" to="/team">
				The Team
			</NavLink>
			<NavLink prefetch="intent" to="/investigations">
				Our Investigations
			</NavLink>
			<NavLink prefetch="intent" to="/resources" end>
				Resources
			</NavLink>
			<NavLink prefetch="intent" to="/contact">
				Contact Us
			</NavLink>
		</nav>
	);
}
