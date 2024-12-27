import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Navigation from "./components/Navigation";

import "./tailwind.css";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export default function App() {
	return (
		<html>
			<head>
				<Links />
				<title>TodoApp</title>
			</head>
			<body>
				<Navigation />
				<main>
					<Outlet />
				</main>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
