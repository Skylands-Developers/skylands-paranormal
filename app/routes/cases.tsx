import { Outlet } from "@remix-run/react";

export default function Cases() {
	return (
		<div className="page cases">
			<Outlet />
		</div>
	);
}
