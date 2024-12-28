import { NavLink } from "@remix-run/react";

export default function Navigation() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-white text-2xl" : "hover:text-blue-300 text-2xl"
                    }
                >
                    Simple Authentication
                </NavLink>
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
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "text-blue-400" : "hover:text-blue-300"
                        }
                    >
                        Profile
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}