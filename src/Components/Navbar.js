import React from "react";
import {Link} from 'react-router-dom';
import './Home.css'


function Navbar() {

    return(
        <>

       <nav className="navbar">
        <h1 className="logo">FETCH-O-FETCH-API'S</h1>
        <ul className="nav-links">
            <Link to="/" className="H"><li>Home</li></Link>
            <Link to='/todoList'  className="Todo"><li>TodoList</li></Link>
            <Link to='/login'  className="Lo"><li>Login</li></Link>
            <Link to='/signup'  className="Si"><li>SignUp</li></Link>
        </ul>
       </nav>

        
        </>
    )
    
}
export default Navbar