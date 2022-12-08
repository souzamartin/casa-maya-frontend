import {useState, useEffect} from "react"
import Order from './Order'

const PrevOrders = () => {
   const [prevOrders, setPrevOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/orders/complete")
        .then(r => r.json())
        .then(setPrevOrders)
      }, [])

    if (prevOrders !== []) {
        return (
            <div className='prevorder'>
                <h2>Previous Orders</h2>
                {prevOrders.map(order =>
                    <Order key={order.id} order={order} />
                )}
            </div>
        )}
    else {
        return (<p>No previous orders.</p>)
    }
}

export default PrevOrders
