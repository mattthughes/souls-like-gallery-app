import React from "react";
import { useCurrentUser } from "../contexts/UserCurrentContext";
import Games from "../pages/games/Games";

function PrivateRoute() {
    const currentUser = useCurrentUser();

    if (currentUser?.username === "admin") {
        return <Games/>
    } else {
        return <h1>Page not found</h1>
    }
}

export default PrivateRoute;