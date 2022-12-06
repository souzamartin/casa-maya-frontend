import Order from './Order'


const PrevOrders = ({customer}) => {
    if (!customer) return <h2>Please Log In</h2>
    else return (
        <div>
            <h2>Previous Orders</h2>
            {customer.orders.map(order => 
                <Order order={order} key={order.id} />    
            )}
        </div>
    )
}

export default PrevOrders