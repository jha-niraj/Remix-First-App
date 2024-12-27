import { NavLink } from "@remix-run/react";

export default function Navigation() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">TodoApp</div>
                <div className="flex space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-400" : "hover:text-blue-300"
                        }
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "text-blue-400" : "hover:text-blue-300"
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "text-blue-400" : "hover:text-blue-300"
                        }
                    >
                        Settings
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}