import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="Header-Links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pages/about" exact>About</NavLink>
                    <NavLink to="/pages/advice">Advice</NavLink>
                    <NavLink to="/pages/contacts">Contacts</NavLink>
                    <NavLink to="/pages/films">Films</NavLink>
                    <NavLink to="/pages/another">Another</NavLink>
                    <NavLink to="/pages/admin">Admin</NavLink>
                </div>
            </div>
        )
    }
}



export default Header;