import { createCookieSessionStorage } from "react-router";
import { createThemeSessionResolver } from "remix-themes";

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === "production";

const themeSessionStorage = createCookieSessionStorage({
	cookie: {
		name: "theme",
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secrets: [String(process.env.VITE_THEME_SESSION_COOKIE_SECRET)],
		// Set domain and secure only if in production
		...(isProduction
			? { domain: "outlet.com", secure: true }
			: { domain: "outlet.local", secure: false }),
	},
});

export const themeSessionResolver =
	createThemeSessionResolver(themeSessionStorage);
