import { MetaFunction, redirect, useLoaderData } from "@remix-run/react";
import { findUser, UserProps } from "users";

export const meta: MetaFunction = () => {
    return [
        { title: "Profile" },
        { name: "Description", content: "This is the profile page" }
    ]
}

export const loader = async({ params } : { params: { userid: string } }) => {
    const user = findUser(params.userid);

    console.log(user);

    if(!user) {
        redirect("/");
    }

    return new Response(JSON.stringify(user), { headers: { "Content-Type": "application/json" } });
}
export default function Profile() {
    const user = useLoaderData<UserProps>();

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1>Welcome, { user?.name }</h1>
            <p>{ user?.email }</p>
            <div className="flex gap-4 items-center justify-center">
                <button className="bg-white text-black p-2 rounded-2xl">Log Out</button>
                <button className="bg-white text-black p-2 rounded-2xl">Delete</button>
            </div>
        </div>
    )
}