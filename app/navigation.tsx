import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

export function Navigation() {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const active = "active";
	const navClasses = [navIsOpen ? active : undefined]
		.filter(Boolean)
		.join(" ");

	return (
		<>
			<Link className="sp-logo" to="/">
				<img
					alt="Skylands Paranormal Logo"
					title="Skylands Paranormal Logo"
					src="../../static/media/logos/skylands-paranormal-logo-color.svg"
				/>
			</Link>
			<nav className={navClasses}>
				<NavLink
					prefetch="intent"
					to="/"
					end
					className={({ isActive }) =>
						isActive ? active : undefined
					}
					onClick={() => {
						setNavIsOpen(false);
					}}
				>
					Home
				</NavLink>
				<NavLink
					prefetch="intent"
					to="/about"
					className={({ isActive }) =>
						isActive ? active : undefined
					}
					onClick={() => {
						setNavIsOpen(false);
					}}
				>
					About
				</NavLink>
				<NavLink
					prefetch="intent"
					to="/team"
					className={({ isActive }) =>
						isActive ? active : undefined
					}
					onClick={() => {
						setNavIsOpen(false);
					}}
				>
					The Team
				</NavLink>
				<NavLink
					prefetch="intent"
					to="/cases"
					className={({ isActive }) =>
						isActive ? active : undefined
					}
					onClick={() => {
						setNavIsOpen(false);
					}}
				>
					Our Cases
				</NavLink>
				<NavLink
					prefetch="intent"
					to="/resources"
					end
					className={({ isActive }) =>
						isActive ? active : undefined
					}
					onClick={() => {
						setNavIsOpen(false);
					}}
				>
					Resources
				</NavLink>
				<button
					onClick={() => {
						setNavIsOpen(false);
						if (window.top) {
							const email = "skylandsparanormal@gmail.com";
							const subject =
								"Skylands%20Paranormal%20Contact%20Request";
							const body =
								"Please%20include%20your%20name%20and%20details%20of%20your%20request";
							window.top.location = `mailto:${email}?subject=${subject}&body=${body}`;
						}
					}}
				>
					Contact Us
				</button>
			</nav>
			<div
				className="nav-trigger"
				title="Navigation Menu"
				onClick={(
					event: React.MouseEvent<HTMLImageElement, MouseEvent>
				) => {
					event.preventDefault();
					if (window.innerWidth <= 960) {
						//mobile
						setNavIsOpen(!navIsOpen);
					}
				}}
			>
				<span>Menu</span>
			</div>
		</>
	);
}
