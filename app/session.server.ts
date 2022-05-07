import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "__session",
		httpOnly: true,
		maxAge: 0,
		path: "/",
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
	},
});

export async function getSession(request: Request) {
	const cookie = request.headers.get("Cookie");
	return sessionStorage.getSession(cookie);
}
