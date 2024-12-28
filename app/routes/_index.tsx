import { MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { addUser, findUserWithEmailAndPassword, UserProps, users } from "users";
import { v4 as uuidv4 } from "uuid";

export const meta: MetaFunction = () => {
	return [
		{ title: "First Remix App" },
		{ name: "Description", content: "Login Page" }
	]
}

type ActionDataTypes = {
	error?: string;
	user: UserProps;
}
export const action = async({ request } : { request: Request }) => {
	const formData = await request.formData();
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if(!email || !password) {
		return Response.json({ msg: "Please provide the email and password" }, { status: 400 });
	}

	const newUser = {
		id: uuidv4(),
		name, 
		email,
		password
	}

	const existingUser = findUserWithEmailAndPassword(email, password);

	const user = existingUser || newUser;

	if(!existingUser) {
		addUser(newUser);
	}

	return Response.json({ user }, { status: 200 });
}
export default function Index() {
	const actionData = useActionData<ActionDataTypes>();
	const navigate = useNavigate();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("loggedUser");

		if(loggedInUser) {
			const user = JSON.parse(loggedInUser);
			navigate(`/profile/${user?.id}`);
		}

		if(actionData?.user) {
			localStorage.setItem("loggedUser", JSON.stringify(actionData?.user));
			navigate(`/profile/${actionData?.user?.id}`);
		}
	}, [actionData, navigate]);

	return (
		<div>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<Form
					method="post"
					className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
				>
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700">
							Name
						</label>
						<input
							id="name"
							name="name"
							placeholder="Enter your Name"
							className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							id="email"
							name="email"
							placeholder="Enter your email"
							className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							id="password"
							name="password"
							placeholder="Enter your Password"
							type="password"
							className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div>
						<button
							type="submit"
							className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Submit
						</button>
					</div>
				</Form>
			</div>

		</div>
	)
}

// export default function Index() {
// 	return (
// 		<div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
// 			<div className="container mx-auto px-4 py-16">
// 				<div className="text-center text-white">
// 					<h1 className="text-5xl font-bold mb-4">Welcome to TodoApp</h1>
// 					<p className="text-xl mb-8">Organize your tasks efficiently</p>
// 					<a
// 						href="/dashboard"
// 						className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50"
// 					>
// 						Get Started
// 					</a>
// 				</div>

// 				<div className="mt-16 grid md:grid-cols-3 gap-8">
// 					<div className="bg-white p-6 rounded-lg shadow-lg">
// 						<h3 className="text-xl font-bold mb-2">Easy Organization</h3>
// 						<p className="text-gray-600">Create, manage, and track your todos with ease</p>
// 					</div>
// 					<div className="bg-white p-6 rounded-lg shadow-lg">
// 						<h3 className="text-xl font-bold mb-2">Stay Productive</h3>
// 						<p className="text-gray-600">Keep track of your progress and stay focused</p>
// 					</div>
// 					<div className="bg-white p-6 rounded-lg shadow-lg">
// 						<h3 className="text-xl font-bold mb-2">Cloud Sync</h3>
// 						<p className="text-gray-600">Access your todos from anywhere, anytime</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }