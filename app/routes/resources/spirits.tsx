import { Outlet } from "@remix-run/react";

export default function Spirits() {
	return (
		<div className="spirits">
			<Outlet />
		</div>
	);
}
