import React,{Component} from 'react';
class Demo extends Component{
constructor(props){
    super();
    
   // let {id1}=props;

   //console.log(id1);
   //
}
render(){
    let {title,amount}=this.props;
    return(
<>

<h1>title:{titlee}</h1>
<h1>amount:{amount}</h1>
</>
    )
}

}
export default Demo;