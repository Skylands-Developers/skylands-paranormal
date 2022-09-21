import { Outlet } from "@remix-run/react";
import { useNavigate } from "react-router-dom";

export default function Index() {
	const navigate = useNavigate();
	return (
		<div className="home">
			<Outlet />
			<img
				className="sp-banner"
				alt="Skylands Paranormal Logo"
				src="static/media/logos/skylands-paranormal-logo-color.svg"
				onClick={() => {
					navigate("/about");
				}}
			/>
			<h1>Skylands Paranormal</h1>
			<h4>Est. 2007</h4>
		</div>
	);
}
