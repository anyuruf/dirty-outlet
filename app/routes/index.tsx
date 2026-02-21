import LandingPage from "~/components/landing";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Outlet iCom" },
		{
			name: "ecommerce platform",
			content: "Welcome to Outlets ecommerce platform!",
		},
	];
}

export default function HomePage() {
	return <LandingPage />;
}
