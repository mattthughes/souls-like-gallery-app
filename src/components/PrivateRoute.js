import React from "react";
import { useCurrentUser } from "../contexts/UserCurrentContext";


function PrivateRoute({ children }) {
    const currentUser = useCurrentUser();

    if (currentUser?.username === "admin") {
        return currentUser ? children : <div></div>;
    } else {
        return <h1>Not found</h1>;
    }
}


export default PrivateRoute;