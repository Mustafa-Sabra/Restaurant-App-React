import axios from 'axios';
import React, { Component } from 'react';



class ProductForm extends Component {
    state = {
        name: "",
        id: 0,
        count: 1,
        price: "",
        isInCart: false
    };
    componentDidMount = async () =>{
        if(this.props.match.params.id !== "new"){
            const {data} = (await axios.get("http://localhost:3000/products/" + this.props.match.params.id));
            const state = {...this.state};
            state.name = data.name;
            state.price = data.price;
            state.id = data.id;
            this.setState(state);
        }
    }
    handleChange = (e) => {
        //clone
        let state = { ...this.state };
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //setState
        this.setState(state);
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.props.location.pathname === "/productform/new") {
            await axios.post("http://localhost:3000/products", this.state);
        } else {
            //Delete id from object
            const obj = {...this.state};
            delete obj.id;
            await axios.put("http://localhost:3000/products/" + this.state.id, obj);
        }
        this.props.history.replace("/admin");
    }
    render() {
        //console.log(this.props.match);
        return (
            <React.Fragment>
                <h1>{this.props.match.params.id === "new"?"Add Product":"Edit Product"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" >Meal Name</label>
                        <input
                            value={this.state.name}
                            name="name"
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Price</label>
                        <input
                            value={this.state.price}
                            name="price"
                            onChange={this.handleChange}
                            type="number"
                            className="form-control"
                            id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">{this.props.match.params.id === "new"?"ADD":"EDIT"}</button>
                </form>
            </React.Fragment >
        )
    }
}

export default ProductForm;