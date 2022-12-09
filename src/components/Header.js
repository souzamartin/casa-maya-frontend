// import {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"
import logo from "../images/logo.png"


const Header = () => {
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        textDecoration: "none",
        color: "black",
        textAlign: "center"
    }

    const activeStyle = {
        display: "inline-block",
        background: "#9acd32", 
        width: "80px",
        height: "50px",
        textAlign: "center",
        color: "white"
    }

    return (
        <div className="header">
            <img className="logo" src={logo}/>
            <h1>Casa Maya Tequila</h1>
            <br/>
            <div className="navbar">
                <NavLink
                    exact to="/"
                    activeStyle={activeStyle}
                    style={linkStyles}>
                    Home
                </NavLink>
                <NavLink
                    to="/shop"
                    activeStyle={activeStyle}
                    style={linkStyles}>
                    Shop
                </NavLink>
                <NavLink
                    to="/cart"
                    activeStyle={activeStyle}
                    style={linkStyles}>
                    Cart
                </NavLink>
                <NavLink
                    to="/prev_orders"
                    activeStyle={activeStyle}
                    style={linkStyles}>
                    Previous Orders
                </NavLink>
            </div>
        </div>
    )
}

export default Header

// Periwinkle: activeStyle={{background: "#CCCCFF"}}