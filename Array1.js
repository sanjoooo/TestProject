import React ,{Component} from 'react';
class Array1 extends Component{

constructor(props){
    super();
  //  let {n}=props;
   // console.log(n.length);
}
render(){

   let {n}=this.props;
return(
    <>
<h1>names:{n}</h1>
<h1>{n.length}</h1>
<h1>Hello</h1>
</>
)

}

}
export default Array1;
