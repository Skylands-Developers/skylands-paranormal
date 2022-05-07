import { Outlet } from "remix";

export default function Cryptids() {
	return (
		<div className="cryptids">
			<Outlet />
		</div>
	);
}
