import React, { Component } from 'react';



import Product from '../Components/Product';

class ProductsContainer extends Component {
    
        render() { 
        const {handleReset, handleDelete, handlerIncrement, products} = this.props;
        return ( 
            <React.Fragment>
                <button className="btn btn-secondary btn-sm m-2" onClick={handleReset}>RESET</button>
                <main className="container">
                    {products.map( product =>  
                    <Product 
                        key={product.id} 
                        product={product}
                        handleDelete= {handleDelete}
                        handlerIncrement = {handlerIncrement}
                        />
                    )}
                </main>
            </React.Fragment>
         );
    }
}
 
export default ProductsContainer;