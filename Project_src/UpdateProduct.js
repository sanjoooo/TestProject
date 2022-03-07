import React, { Component } from 'react';
import axios from 'axios';
class UpdateProduct extends Component{
    constructor()
    {
        super();
        this.state = {products:{pname:'',description:'', price:''}, editId:"", showMessage:'', arrProducts:[]} 
    }
    componentDidMount()
    {
        this.loadData();
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let { products } = this.state;
        this.setState({products:{...products,[name]:value}});
    }
onEdit=(product)=>{
    let { products}= this.state;
    products.pname = product.pname;
    products.description =  product.description;
    products.price = product.price
    this.setState({editId:product._id, products});
}
    loadData = ()=>{
        axios.get("http://localhost:8181/product").then(response => {
            this.setState({ arrProducts: response.data });
        })
        
    }
    onDelete = (pid)=>{

        axios.delete("http://localhost:8181/product/deleteProduct/"+pid).then(resp=>{
            console.log("Delete ", resp);
            this.loadData();
        })
    }



    
    onSubmit = (e)=>
    {
        e.preventDefault();
        const { products,editId } = this.state;
        const URL = "http://localhost:8181/product/updateProduct/"+editId;
        axios.put(URL, this.state.products).then(response=>{
            console.log(response);
            this.loadData();
        });
    }
    render()
    {
        const { products, showMessage, arrProducts } = this.state;
        return(
          <>
              <div>
                  <table>
                      <tbody>
                          {arrProducts.map((item,idx)=>{
                              return(
                                  <tr key={idx}>
                                        <td>{item.pname}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td><button onClick={()=>this.onEdit(item)}>Edit</button></td>
                                        <td><button onClick={()=>this.onDelete(item._id)}>Delete</button></td>
                                  </tr>    
                              )
                          })}
                      </tbody>
                  </table>
                  
              </div>
              
               <div className="text-left">
               <span className="alert-success">{showMessage}</span>
               <form onSubmit={this.onSubmit}>
                <h5>Add Product</h5>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" name="pname" value={products.pname} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" name="description" value={products.description} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" name="price" value={products.price} onChange={this.onChangeHandler}/>
                </div> 
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
                </form>
               </div>
               </> 
           
        )
    }

}

export default UpdateProduct;