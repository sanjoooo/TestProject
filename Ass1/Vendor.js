import React, {useState} from 'react';
function Vendor(){
    const VData = [{venid:1,vname:"Yash",contact:9909943356,address:"Ahmedabad"},
    {venid:2,vname:"Sakshi",contact:9909946756,address:"Pune"},
    {venid:3,vname:"Pushakr",contact:9909943896,address:"Mumbai"},
    {venid:4,vname:"Prisha",contact:9909943365,address:"Nasik"},
    {venid:5,vname:"Kaivlya",contact:9909943397,address:"Nanded"},
    {venid:6,vname:"Kavya",contact:9909943328,address:"Pune"},
    {venid:7,vname:"Nishi",contact:9909943305,address:"Mumbai"}]
    const [VendorData, setVendorData]=useState(VData);
    return(
        <>
        <h4 className="text-center">Vendor List</h4>
        <br></br>
        <table className='table table-striped'>
                    <tbody>
                        <tr>
                        <th>Vendor ID</th>
                        <th>Vendor Name</th>
                        <th>Contact No</th>
                        <th>City</th>
                        </tr>
                        {VendorData.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                <td>{item.venid}</td>
                                <td>{item.vname}</td>
                                <td>{item.contact}</td>
                                <td>{item.address}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>
    )
}
export default Vendor;