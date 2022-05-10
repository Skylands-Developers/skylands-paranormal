import { Outlet } from "@remix-run/react";

export default function Contact() {
	return (
		<div className="contact">
			<Outlet />
		</div>
	);
}
