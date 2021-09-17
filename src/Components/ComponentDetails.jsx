import React, {Component} from 'react';

class ComponentDetails extends Component {

    handleSave = () => this.props.history.replace("/cart");

    render() { 
        const product = this.props.products.filter((p) => p.id === parseInt(this.props.match.params.id))[0];
        return ( 
        <React.Fragment>
            <h1>id: {product.id}</h1>
            <h1>name: {product.name}</h1>
            <h1>count: {product.count}</h1>
            <button className="btn btn-primary" onClick={this.handleSave}>SAVE</button>
        </React.Fragment> );
    }
}
 
export default ComponentDetails;