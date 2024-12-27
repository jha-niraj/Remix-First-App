export default function Settings() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
                        <div className="space-y-3">
                            <label className="flex items-center">
                                <input type="radio" name="theme" value="light" defaultChecked />
                                <span className="ml-2">Light Theme</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="theme" value="dark" />
                                <span className="ml-2">Dark Theme</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                        <div className="space-y-3">
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked />
                                <span className="ml-2">Email Notifications</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked />
                                <span className="ml-2">Push Notifications</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Todo Preferences</h2>
                        <div className="space-y-3">
                            <label className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Auto-archive completed todos</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Show due dates</span>
                            </label>
                        </div>
                    </div>

                    <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
}