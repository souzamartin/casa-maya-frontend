import Order from './Order'

const Cart = ({orders, items}) => {
    return (
        <div>
            <h2>Cart</h2>
            {orders.filter(order => order.complete === false).map(order =>
                <Order key={order.id} order={order} items={items} />
            )}
        </div>
    )
}

export default Cart