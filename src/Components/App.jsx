import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import Menu from "./Menu";
import NotFound from "./NotFound";
import Login from "./Login";
import Admin from "./Admin";
import ProductForm from "./ProductForm";


import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";



import ProductsContainer from '../Components/ProductsContainer';
import ComponentDetails from './ComponentDetails';





class App extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        const res = await axios.get("http://localhost:3000/products");
        const data = res.data;

        this.setState({ products: data })
    }
    handlerIncrement = (product) => {
        //clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //edit
        products[index].count++;
        this.setState({ products: products });

    }
    handleDelete = (product) => {
        //clone
        //edit
        product.isInCart = false
        const products = this.state.products.filter((p) => p.id !== product.id);
        //setState
        this.setState({ products });
    };
    handleReset = () => {
        //clone
        //edit
        const products = this.state.products.map((product) => {
            product.count = 0;
            return product;
        });
        //setState
        this.setState({ products });
    }
    handleChangeInCart = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };

        products[index].isInCart = !products[index].isInCart;

        this.setState({ products });

    }
    deleteProduct = async (product) => {
        //save a copy of old data
        const oldProducts = [...this.state.products];

        //clone
        //edite
       const  products = this.state.products.filter(p => p.id !== product.id);
        //setState
        this.setState({ products });

        //Delete the product from the backend server 
        try{
            await axios.delete("http://localhost:3000/products/" + product.id);
        }catch(ex){
            toast.error("Can't Delete");
            this.setState({product:oldProducts});
            
            
        }
        
    }
   
    render() {
        return (
            <React.Fragment >
                <ToastContainer />
                <NavBar productsNumber={(this.state.products.filter((p) => (p.isInCart === true && p.count !== 0))).length} />
                <main className="container">
                    <Switch>
                        <Route path="/menu" render={(props) => (
                            <Menu handleChangeInCart={this.handleChangeInCart} products={this.state.products} />
                        )}
                        />
                        <Route path="/cart" render={(props) => (
                            <ProductsContainer
                                products={this.state.products.filter((p) => p.isInCart === true)}
                                handlerIncrement={this.handlerIncrement}
                                handleDelete={this.handleChangeInCart}
                                handleReset={this.handleReset}
                                {...props} />)}
                        />
                        <Route path="/admin" render={(props) => (
                            <Admin
                                products={this.state.products}
                                deleteProduct={this.deleteProduct}
                                {...props} />
                        )} />
                        <Route path="/productform/:id" render={(props) => (
                            <ProductForm
                                {...props} />
                        )} />
                        <Route path="/details:id" render={(props) => (
                            <ComponentDetails
                                products={this.state.products}
                                {...props} />
                        )} />
                        <Route path="/notfound" component={NotFound} />
                        <Route path="/login" component={Login} />

                        <Redirect from="/" exact to="/menu" />
                        <Redirect to="/notfound" />
                    </Switch>
                </main>


            </React.Fragment>
        );
    }
}

export default App;