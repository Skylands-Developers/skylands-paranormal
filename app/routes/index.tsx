import { Outlet } from "@remix-run/react";

export default function Index() {
	return (
		<div className="home">
			<Outlet />
			<img
				className="sp-banner"
				alt="Skylands Paranormal Logo"
				src="../../static/media/logos/skylands-paranormal-logo-color.svg"
			/>
		</div>
	);
}
