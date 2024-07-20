import React from "react";
import { useCurrentUser } from "../contexts/UserCurrentContext";
import NotFound from "./NotFound";
import { useLocation } from 'react-router-dom';


function PrivateRoute({ children }) {
    const currentUser = useCurrentUser();
    const location = useLocation();
    if (currentUser?.username === "admin" && location.pathname === "/game/create") {
        console.log(location.pathname)
        return currentUser ? children : <NotFound/>;
        
    }
    
    return <NotFound/>
    
}


export default PrivateRoute;