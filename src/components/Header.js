// import {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <h1>Casa Maya Tequila</h1>
            <div>
                <NavLink
                    exact to="/"
                    activeStyle={{background: "#CCCCFF"}}>
                    Home
                </NavLink>
                <NavLink
                    to="/shop"
                    activeStyle={{background: "#CCCCFF"}}>
                    Shop
                </NavLink>
                <NavLink
                    to="/cart"
                    activeStyle={{background: "#CCCCFF"}}>
                    Cart
                </NavLink>
                <NavLink
                    to="/prev_orders"
                    activeStyle={{background: "#CCCCFF"}}>
                    Previous Orders
                </NavLink>
            </div>
        </div>
    )
}

export default Header