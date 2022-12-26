import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import menu from '../../images/menu-burger.svg';
import './navbar.css';

class Navbar extends Component {
    state = {clicked: true};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {

    return (
        <header>
            <a href='#' className="logo"><img src={logo} alt="pockemoney" /></a>

            <ul className={this.state.clicked ? "navbar" : "navbar open"}>
                <li><Link to="/" href="#" className="active">Home</Link></li>
                <li><Link to="/shop" href="#">Shop</Link></li>
                <li><Link to="/donate" href="#">Donate</Link></li>
                <li><Link to="/message" href="#">Messages</Link></li>
                <li><Link to="/user" href="#">User</Link></li>
            </ul>

            <div className="user_balance">
                27.00$
            </div>
            <img onClick={this.handleClick} src={menu} alt="menu" className="bx bx-menu" id="menu-icon"/>
        </header>
    )}
}

export default Navbar;