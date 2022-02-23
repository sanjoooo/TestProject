import React,{useState} from 'react';
import Displaydetails from './Displaydetails';

export default function Display(){
    const[value1,setValue1]=useState();
const onUpdate=(val1)=>{
    console.log("onupdate at Display",val1);
setValue1(val1);
}
return(
<>
<h4>Display {value1}</h4>
<Displaydetails update={onUpdate}/>
</>
)

}