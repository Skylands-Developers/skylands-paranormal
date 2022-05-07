import { Outlet } from "remix";

export default function About() {
	return (
		<div className="about">
			<Outlet />
		</div>
	);
}
