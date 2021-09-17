import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand" >Navbar</span>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Menu">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">ShoppingCart</NavLink>
                        </li>y
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">Admin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
                <span className="badge bg-primary">{props.productsNumber}</span>
            </div>
        </nav>
     );
}
 
export default NavBar;
