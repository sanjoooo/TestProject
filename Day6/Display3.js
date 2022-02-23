import React , {useState, useEffect} from 'react';
function Display3()
{
    const [counter, setCounter] = useState(1);
    useEffect(()=>{
        console.log("useEffect");
    })
    const onclickHandler = ()=>{
        console.log("Counter ", counter);
        let cnt = counter;
        cnt++;
        setCounter(cnt);
    }
    return(
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={onclickHandler}>Click</button>
        </>
    )
}

export default Display3