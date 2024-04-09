import React, { useState } from "react";
import UserConetxt from "./Usercontext.js";

const  UserConetxtProvider=({children})=>{
    const [user,setUser]=useState(null)

    return (
        <UserConetxt.Provider value={{user,setUser}}>
        {children}
        </UserConetxt.Provider>
    )

}

export default UserConetxtProvider