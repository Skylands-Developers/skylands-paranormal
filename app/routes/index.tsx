import { Outlet } from "@remix-run/react";

export default function Index() {
	return (
		<div className="home">
			<Outlet />
			<img
				className="sp-banner"
				alt="skylands paranormal"
				src="../../static/media/logos/skylands-paranormal-logo-white.png"
			/>
		</div>
	);
}
