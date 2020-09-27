import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navBar">
            <div className="headerBrand">
                JAMES COOK
           </div>
            <div className="headerMenu">
                <NavLink to="/" className="navItem">Home</NavLink>
                <NavLink to="/portfolio" className="navItem">Portfolio</NavLink>
                <NavLink to="/contact" className="navItem">Contact</NavLink>
            </div>
        </div>
    );
}

export default Navigation;