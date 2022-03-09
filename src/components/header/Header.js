import React from "react";
import {Link} from 'react-router-dom';
import './Header.css'

function Header(){
    return(
        <nav>
        <Link to="/"> Home</Link>
        {/* <Link to="/city/:id"> TourDetail</Link> */}
    </nav>
    )
};

export  default Header;