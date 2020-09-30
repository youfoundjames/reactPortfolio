import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        
        <div className="navBar">
            <h1></h1>
            <div className="headerBrand">
                JAMES COOK
           </div>
            <div className="headerMenu">
                <NavLink to="/" className="navItem">home</NavLink>
                <NavLink to="/portfolio" className="navItem">portfolio</NavLink>
                <NavLink to="/contact" className="navItem">contact</NavLink>
            </div>
        </div>
    );
}

export default Navigation;