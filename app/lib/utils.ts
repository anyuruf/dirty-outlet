import { type ClassValue, clsx } from "clsx";
import { useMatches, useRouteLoaderData } from "react-router";
import { twMerge } from "tailwind-merge";
import type { NavbarNavItem } from "~/types.d.ts/navigation.ts";

export function useParentData(pathname: string): unknown {
	const matches = useMatches();
	const parentMatch = matches.find((match) => match.pathname === pathname);
	if (!parentMatch) return null;
	return parentMatch.loaderData;
}

export function useRouteData() {
	const match = useRouteLoaderData("root");
	if (!match) {
		throw new Error("this root data does not exist on the current route");
	}
	return match;
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const BACKEND_SERVER_URL =
	String(process.env.VITE_BACKEND_SERVER_URL) || "http://localhost:8080";
//export const BACKEND_SERVER_URL = "http://localhost:8080";

// Default navigation links
export const defaultNavigationLinks: NavbarNavItem[] = [
	{ href: "#", label: "Home" },
	{ href: "#", label: "Great Deals" },
	{ href: "#", label: "Sell" },
	{ href: "#", label: "My Outlet" },
];
