import {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom"

const Header = ({setActiveCustomerId}) => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/customers")
        .then(r => r.json())
        .then(setCustomers)
    },[])

    const handleChange = (e) => setActiveCustomerId(e.target.value)

    return (
        <div>
            <h1>Casa Maya Tequila</h1>
            <select name="active-customer" onChange={handleChange}>
                <option value="" disabled selected hidden>Select Customer</option>
                {customers.map(customer =>
                    <option value={customer.id} key={customer.id}>{customer.name}</option>
                )}
            </select>
            <div>
                <NavLink
                    exact to="/"
                    activeStyle={{background: "#CCCCFF"}}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/shop"
                    activeStyle={{background: "#CCCCFF"}}
                >
                    Shop
                </NavLink>
                <NavLink
                    to="/cart"
                    activeStyle={{background: "#CCCCFF"}}
                >
                    Cart
                </NavLink>
                <NavLink
                    to="/prev_orders"
                    activeStyle={{background: "#CCCCFF"}}
                >
                    Previous Orders
                </NavLink>
                <NavLink
                    to="/account"
                    activeStyle={{background: "#CCCCFF"}}
                >
                    Account Details 
                </NavLink>
            </div>
        </div>
    )
}

export default Header