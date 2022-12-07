import Order from './Order'

const Cart = ({orders, items, changeQuantity, deleteOrder}) => {
    return (
        <div>
            <h2>Cart</h2>
            {orders.filter(order => order.complete === false).map(order =>
                <Order
                    key={order.id}
                    order={order}
                    items={items} 
                    changeQuantity={changeQuantity}
                    deleteOrder={deleteOrder}
                />
            )}
        </div>
    )
}

export default Cart