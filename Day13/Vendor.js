import React from "react";
import HOC from "./HOC";
const Vendorfunc=()=>{
    return(
        <>
        <h4>Vendor Component</h4>
        </>
    )
}
const Vendor=new HOC(Vendorfunc)
export default Vendor;