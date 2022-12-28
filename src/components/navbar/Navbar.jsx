import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

import logo from '../../images/logo.png';
import menu from '../../images/menu-burger.svg';



class Navbar extends Component {
    state = {clicked: true};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {

    return (
        <header>
            <a href='/' className="logo"><img src={logo} alt="pockemoney"/></a>

            <ul className={this.state.clicked ? "navbar" : "navbar open"}>
                <li><a to="/" className="active">Home</a></li>
                <li><a to="/shop">Shop</a></li>
                <li><a to="/donate">Donate</a></li>
                <li><a to="/message">Messages</a></li>
                <li><a to="/user">User</a></li>
                <li><a to="/settinhs">Settings</a></li>
            </ul>

            <div className="user_balance">
                27.00$
            </div>
            <div className="menu_btn"><img onClick={this.handleClick} src={menu} alt="menu" className="bx bx-menu" id="menu-icon"/></div>
        </header>
    )}
}

export default Navbar;