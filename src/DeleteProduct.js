import React, { Component } from 'react';
import axios from 'axios';
class DeleteProduct extends Component {
    constructor()
    {
        super();
        this.state = {Products:[]};
    }
    componentDidMount() {     
        axios.get("http://localhost:8181/product").then(response => {
            this.setState({ products: response.data });
        })
    }
    onDelete = (id)=>{
        axios.delete("http://localhost:8181/product/deleteProduct/:id").then(resp=>{
            console.log("Delete ", resp);
        })
    }
    render() {
        let { products } = this.state;
      return(
          <>
          <h5>Delete a Product </h5>
             <table className="table">
            <tbody>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                {products.map((item, idx) => {
                    return (
                        <tr key={idx}>
                                <td>{item.pname}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><button className="btn btn-danger" onClick={()=>this.onDelete(item.id)}>Delete</button></td>
                            </tr>)
                })}                
            </tbody>
        </table>
          </>
      )
    }
}
export default DeleteProduct
