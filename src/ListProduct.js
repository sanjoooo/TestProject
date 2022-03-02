import React, { Component } from 'react';
import axios from 'axios';
class ListProduct extends Component {
    constructor()
    {
        super();
        this.state = {products:[]};
    }
    componentDidMount() {     
        axios.get("http://localhost:8181/product").then(response => {
            this.setState({ products: response.data });
        })
    }
    render() {
        let {  products } = this.state;
      return(
          <>
             <table className="table">
            <tbody>
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                {products.map((item, idx) => {
                    return (
                        <tr key={idx}>
                                <td>{item.pname}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>)
                })}                
            </tbody>
        </table>
          </>
      )
    }
}
export default ListProduct;