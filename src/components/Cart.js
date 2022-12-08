import {useEffect} from "react"
import Order from './Order'

const Cart = ({orders, setOrders}) => {

    // Fetch pending orders
    useEffect(() => {
        fetch("http://localhost:9292/orders/pending")
        .then(r => r.json())
        .then(setOrders)
    }, [])

    // Update order quantity
    const changeQuantity = (orderId, newQuantity) => {
        fetch(`http://localhost:9292/orders/${orderId}`, {
            method: "PATCH",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                quantity: newQuantity,
            })
        })
        .then(r => r.json())
        .then(newOrder => setOrders([...orders, newOrder]))
    }

    // Delete pending order
    const deleteOrder = (orderId) => {
    fetch(`http://localhost:9292/orders/${orderId}`, {method: "DELETE"})

        const updatedOrders = orders.filter(order => order.id !== orderId)
        setOrders(updatedOrders)
    }

    const handleClick = () => {
        orders.map(order => {
            fetch(`http://localhost:9292/orders/${order.id}/checkout`, {
            method: "PATCH",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                complete: true,
            })
            })
            .then(r => r.json())
            .then(setOrders([]))
        })
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