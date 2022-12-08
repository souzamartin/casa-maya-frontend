import {useEffect} from "react"
import Order from './Order'

const Cart = ({orders, changeQuantity, deleteOrder}) => {

    const handleClick = () => {
        console.log("OINK")
    }

    if (orders !== []) {
    return (
        <div>
            <h2>Cart</h2>
            {orders.map(order =>
                <Order
                    key={order.id}
                    order={order}
                    changeQuantity={changeQuantity}
                    deleteOrder={deleteOrder}
                />
            )}
            <button onClick={handleClick} >Checkout</button>
        </div>
    )
    } else {
        return <h2>Your cart is empty.</h2>
    }
}

export default Cart