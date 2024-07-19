import React from "react";
import {Redirect} from "react-router-dom";
import {useCurrentUser} from "../contexts/UserCurrentContext";
import Asset from "./Asset";

function PrivateRoute({ children }) {
    const currentUser = useCurrentUser();

    if (!currentUser?.username === "admin") {
        return <Asset spinner /> ;
    }

    return currentUser ? children : <Redirect to="/" replace />;
}


export default PrivateRoute;