import React, { Component } from 'react';


class CartButton extends Component {
    render() {
        const style = this.props.product.isInCart? {cursor:"pointer"}: {cursor:"pointer", color: "#808080"}
        return (
            <i style={style} onClick={() => this.props.handleChangeInCart(this.props.product)} className="fas fa-cart-plus"></i>
        );
    }
}

export default CartButton;