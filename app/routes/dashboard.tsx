import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export async function loader() {
    return json([
        { id: 1, text: "Learn Remix", completed: false },
        { id: 2, text: "Build Todo App", completed: false },
    ]);
}

export default function Dashboard() {
    const initialTodos = useLoaderData<typeof loader>();
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (!newTodo.trim()) return;
        const todo: Todo = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, todo]);
        setNewTodo("");
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Todo Dashboard</h1>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6 flex">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add new todo"
                    />
                    <button
                        onClick={addTodo}
                        className="px-6 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
                <div className="space-y-3">
                    {
                        todos.map((todo) => (
                            <div
                                key={todo.id}
                                className="flex items-center justify-between p-3 bg-black rounded"
                            >
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleTodo(todo.id)}
                                        className="mr-3"
                                    />
                                    <span className={todo.completed ? "line-through text-gray-500" : ""}>
                                        {todo.text}
                                    </span>
                                </div>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="px-3 py-1 text-red-500 hover:bg-red-50 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}