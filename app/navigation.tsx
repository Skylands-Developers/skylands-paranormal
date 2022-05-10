import { NavLink } from "@remix-run/react";
import { useState } from "react";

export function Navigation() {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const active = "active";
	const navClasses = ["navigation", navIsOpen ? active : undefined]
		.filter(Boolean)
		.join(" ");

	return (
		<>
			<img
				className="sp-logo"
				alt="Skylands Paranormal Logo"
				src="../../static/media/logos/skylands-paranormal-logo-color.svg"
				width={48}
				onClick={(
					event: React.MouseEvent<HTMLImageElement, MouseEvent>
				) => {
					event.preventDefault();
					if (window.innerWidth <= 500) {
						//mobile
						setNavIsOpen(!navIsOpen);
					}
				}}
			/>
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
					to="/investigations"
					className={({ isActive }) =>
						isActive ? active : undefined
					}
					onClick={() => {
						setNavIsOpen(false);
					}}
				>
					Our Investigations
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
				<NavLink
					prefetch="intent"
					to="/contact"
					className={({ isActive }) =>
						isActive ? active : undefined
					}
					onClick={() => {
						setNavIsOpen(false);
					}}
				>
					Contact Us
				</NavLink>
			</nav>
		</>
	);
}
