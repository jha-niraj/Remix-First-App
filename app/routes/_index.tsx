export default function Index() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
			<div className="container mx-auto px-4 py-16">
				<div className="text-center text-white">
					<h1 className="text-5xl font-bold mb-4">Welcome to TodoApp</h1>
					<p className="text-xl mb-8">Organize your tasks efficiently</p>
					<a
						href="/dashboard"
						className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50"
					>
						Get Started
					</a>
				</div>

				<div className="mt-16 grid md:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-bold mb-2">Easy Organization</h3>
						<p className="text-gray-600">Create, manage, and track your todos with ease</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-bold mb-2">Stay Productive</h3>
						<p className="text-gray-600">Keep track of your progress and stay focused</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h3 className="text-xl font-bold mb-2">Cloud Sync</h3>
						<p className="text-gray-600">Access your todos from anywhere, anytime</p>
					</div>
				</div>
			</div>
		</div>
	);
}