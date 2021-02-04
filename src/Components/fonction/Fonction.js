import React from 'react'
//import './fonction.css'
import {Link} from  'react-router-dom';
var Fonction=(props) => {
    const {title} =props;
    return (
<nav className="navbar navbar-expand-sm navbar-light bg-success">
    <a className="navbar-brand" href="#">{title}</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" to="/"> Home <span class="sr-only">(current)</span></Link>
                </li>
                <li>
                <Link className="nav-link" to="/contact/add">Add <span class="sr-only">(current)</span></Link>
                </li>
                 <li>
                <Link className="nav-link" to="/about">about <span class="sr-only">(current)</span></Link>
                </li>
           
           
        </ul>
</nav>
    )
        
}
Fonction.defaultProps={
title:"default props",

}
export default Fonction;

