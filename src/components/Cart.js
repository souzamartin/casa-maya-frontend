import Order from './Order'

const Cart = ({orders, items, changeQuantity, deleteOrder}) => {

    const pendingOrders = orders.filter(order => order.complete === false)

    const handleClick = () => {
        console.log("OINK")
    }

    return (
        <div>
            <h2>Cart</h2>
            {pendingOrders.map(order =>
                <Order
                    key={order.id}
                    order={order}
                    items={items} 
                    changeQuantity={changeQuantity}
                    deleteOrder={deleteOrder}
                />
            )}
            <button onClick={handleClick} >Checkout</button>
        </div>
    )
}

export default Cart