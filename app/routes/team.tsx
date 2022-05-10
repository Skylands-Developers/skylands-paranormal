import { Outlet } from "@remix-run/react";

export default function Team() {
	return (
		<div className="team">
			<Outlet />
		</div>
	);
}
