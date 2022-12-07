import Order from './Order'

const PrevOrders = ({orders, items}) => {
   
    return (
        <div>
            <h2>Previous Orders</h2>
            {orders.filter(order => order.complete === true).map(order =>
                // let itemId = order.item_id
                // console.log(itemId)
                // (items.filter(item => item.id === order.item_id))
                <Order key={order.id} order={order} items={items} />
                
            )}
        </div>
    )
}

export default PrevOrders
