import React ,{ useState }from 'react';
function Display2() {
    const [employeeId, setEmployeeId] = useState(123);  
    const [employeeName, setEmployeeName] = useState("");  
    const [address, setAddress] = useState("");  
    const onSubmit = ()=>{
        console.log(employeeId, employeeName, address);
    }
    return (
        <>
            <h1>Employee</h1>
            {employeeId}
            <div className='form-group'>
                <label>Employee Id</label>
                <input type="text" className='form-control' onChange={(e)=>setEmployeeId(e.target.value)}  />
            </div>
            <div className='form-group'>
                <label>Employee Name</label>
                <input type="text" className='form-control' onChange={(e)=>setEmployeeName(e.target.value)}  />
            </div>
            <div className='form-group'>
                <label>Address</label>
                <input type="text" className='form-control' onChange={(e)=>setAddress(e.target.value)}  />
            </div>
            <div className='form-group'>
                <button className="btn btn-success" onClick={onSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Display2;