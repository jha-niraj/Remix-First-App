import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import Navigation from "./components/Navigation";
import "./tailwind.css";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";

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

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
const App = () => {
	return (
		<html>
			<head>
				<Links />
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

export default ClerkApp(App);