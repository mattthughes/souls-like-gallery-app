import React from "react";
import {Redirect} from "react-router-dom";
import {useCurrentUser} from "../contexts/UserCurrentContext";
import Asset from "./Asset";

function PrivateRoute({ children }) {
    const currentUser = useCurrentUser();

    if (currentUser?.username === "admin") {
        return currentUser ? children : <div></div> ;
    }

    return <h1>Not found</h1> ;
}


export default PrivateRoute;