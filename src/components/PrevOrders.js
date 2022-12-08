import {useState, useEffect} from "react"
import Order from './Order'

const PrevOrders = () => {
   const [prevOrders, setPrevOrders] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/orders/complete")
        .then(r => r.json())
        .then(setPrevOrders)
      }, [])

    if (prevOrders === null) {
        return (
            <div>
                <h2>Previous Orders</h2>
                {prevOrders.map(order =>
                    <Order key={order.id} order={order} item={order.item} />
                )}
            </div>
        )}
    else {
        return (<p>No previous orders.</p>)
    }
}

export default PrevOrders
