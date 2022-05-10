import { Outlet } from "@remix-run/react";

export default function Cryptids() {
	return (
		<div className="cryptids">
			<Outlet />
		</div>
	);
}
