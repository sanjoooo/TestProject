import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Admin extends Component {
  constructor() {
    super();
    this.state = {
      menus: { mname: "", description: "", price: "" },
      editId: "",
      showMessage: "",
      arrmenus: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }
  onChangeHandler = (e) => {
    let { name, value } = e.target;
    let { menus } = this.state;
    this.setState({ menus: { ...menus, [name]: value } });
  };
  onEdit = (menu) => {
    let { menus } = this.state;
    menus.mname = menu.mname;
    menus.description = menu.description;
    menus.price = menu.price;
    this.setState({ editId: menu._id, menus });
  };
  loadData = () => {
    axios.get("http://localhost:8181/menunew").then((response) => {
      this.setState({ arrmenus: response.data });
    });
  };
  onDelete = (mid) => {
    axios
      .delete("http://localhost:8181/menunew/deletemenu/" + mid)
      .then((resp) => {
        console.log("Delete ", resp);
        this.loadData();
      });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { menus, editId } = this.state;
    const URL = "http://localhost:8181/menunew/updatemenu/" + editId;
    axios.put(URL, this.state.menus).then((response) => {
      console.log(response);
      this.loadData();
    });
  };
  render() {
    const { menus, showMessage, arrmenus } = this.state;
    return (
      <>
        <div>
          <table className="text-left">
            <tbody>
              {arrmenus.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.mname}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-primary container"
                        onClick={() => this.onEdit(item)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success container"
                        onClick={() => this.onDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="text-left col-md-4">
          <span className="alert-success">{showMessage}</span>
          <form onSubmit={this.onSubmit}>
            <h5>Edit Menu</h5>
            <div className="form-group">
              <label>Menu Name</label>
              <input
                type="text"
                className="form-control"
                name="mname"
                value={menus.mname}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={menus.description}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={menus.price}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-info" type="submit">
                Edit
              </button>
              <br></br>
              Add  More Menu  <Link className="btn btn-danger" to="/addmenu">add</Link> 
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Admin;
