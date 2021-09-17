import React from 'react';

const Admin = (props) => {

    return (
        <React.Fragment>
            <h1>Admin</h1>
            <button onClick ={() => props.history.push("/productform/new")} className="btn btn-primary">ADD</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => {
                        return (
                            <tr key={index + 1}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><i style={{cursor: 'pointer'}} onClick = {() => props.history.push("/productform/" + product.id)} className="fas fa-edit"></i></td>
                                <td><i onClick={() => props.deleteProduct(product)} style={{ cursor: 'pointer' }} className="fas fa-trash"></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Admin;