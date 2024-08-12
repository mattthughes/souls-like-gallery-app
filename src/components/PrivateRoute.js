import React from "react";
import { useCurrentUser } from "../contexts/UserCurrentContext";
import NotFound from "./NotFound";
import { useLocation } from 'react-router-dom';


function PrivateRoute({ children }) {
    const currentUser = useCurrentUser();
    // Using the use location field to determine the path
    const location = useLocation();
    // if the user is the admin user return the game create path otherwise return the not found page.
    if (currentUser?.username === "admin" && location.pathname === "/game/create") {
        return currentUser ? children : <NotFound/>;
        
    }
    return <NotFound/>
    
}


export default PrivateRoute;