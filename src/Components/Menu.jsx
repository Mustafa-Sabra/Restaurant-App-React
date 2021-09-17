import React, {Component} from 'react';
import CartButton from "./CartButton";

class Menu extends Component {
    render() { 
        return  (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Meal</th>
                    <th scope="col">Price</th>
                    <th scope="col">Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product, index) => {
                       return(
                        <tr key = {product.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{<CartButton handleChangeInCart = {this.props.handleChangeInCart} product={product} />}</td>
                        </tr>
                       )
                    })}
                </tbody>
            </table>
        )
        ;
    }
}
 
export default Menu;