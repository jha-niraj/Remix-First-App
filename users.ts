export interface UserProps {
    id: string;
    name: string;
    email: string;
    password: string;
}
export const users = [
    {
        id: "1",
        name: "Niraj Kumar Jha",
        email: "jhaniraj45@gmail.com",
        password: "nirajjha123"
    },
    {
        id: "2",
        name: "Sonali Kumari Jha",
        email: "sonalijha@gmail.com",
        password: "sonalijha123"
    }
]

console.log(users);
export const addUser = (user: UserProps) => {
    const existingUser = findUserWithEmailAndPassword(user.email, user.password);

    if(!existingUser) {
        users.push(user);
    }
}
export const findUser = (id: string) => {
    const user = users.find((u) => u.id === id);
    return user;
}
export const findUserWithEmailAndPassword = (email: string, password: string) => {
    const result = users.find((u) => u.email === email && u.password === password);

    // if(!result) {
    //     alert("Couldn't found user with this email and password");
    //     return;
    // }
    return result;
}
export const deleteUser = (id: string) => {
    const userToDelete = users.find((u) => u.id === id);
    
    // if(!userToDelete) {
    //     alert("Couldn't find user with this id!!!");
    //     return;
    // }

    const finalResult = users.filter((u) => u.id !== userToDelete?.id);
    // if(!finalResult) {
    //     alert("Couldn't be able to delete the user!!!");
    //     return;
    // }
    // alert("Delete the user successfully!!!");
    return finalResult;
}