import React, { Component } from 'react';
import axios from 'axios';
class AddProduct extends Component{
    constructor()
    {
        super();
        this.state = {products:{pname:'',description:'', price:''}, showMessage:''}
    }
    onChangeHandler = (e)=>
    {
        let {name, value }= e.target;
        let { products } = this.state;
        this.setState({products:{...products,[name]:value}});
    }
    onSubmit = (e)=>
    {
        e.preventDefault();
        const URL = "http://localhost:8181/product/addProduct";
        axios.post(URL, this.state.products).then(response=>{
            console.log(response);
         });
    }
    render()
    {
        let { products, showMessage } = this.state;
        return(
            <>
               <div>
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

export default AddProduct;