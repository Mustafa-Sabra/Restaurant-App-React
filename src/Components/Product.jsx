import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    
    getClasses(){
         return (
             this.props.product.count === 0 ? "badge bg-warning m-2":"badge bg-primary m-2"
         )
     }      
     
    render() {
        const {name, count, id} = this.props.product;
        return (
            <div className="row">
                <div className="col-2">
                    <Link to={`/details${id}`}>{name}</Link>
                </div>
                <div className="col">
                    <span className={this.getClasses()}>{count}</span>
                    <button onClick={() => this.props.handlerIncrement(this.props.product)} className="btn btn-primary btn-sm">+</button>
                    <span className="m-2" style={{cursor: "pointer"}} onClick={() => this.props.handleDelete(this.props.product)}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
                
                
            </div>
        )        
    }
}
 
export default Product;