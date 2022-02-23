import React from "react";
import HOC from "./HOC";
const Clientfunc=()=>{
    return(
        <>
        <h4>Client Component</h4>
        </>
    )
}
const Client=new HOC(Clientfunc)
export default Client;