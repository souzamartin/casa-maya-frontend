import Order from './Order'

const PrevOrders = ({orders, items}) => {
   
    return (
        <div>
            <h2>Previous Orders</h2>
            {orders.filter(order => order.complete === true).map(order =>
                <Order key={order.id} order={order} items={items} />
            )}
        </div>
    )
}

export default PrevOrders
