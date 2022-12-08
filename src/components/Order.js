import {useState} from "react"

const Order = ({order, changeQuantity, deleteOrder}) => {
    const [visible, setVisible] = useState(true)

    const handleChange = (e) => {
        changeQuantity(order.id, e.target.value)
        setVisible(!visible)
    }

    return (
        visible ?
        <div>
            <h3>{order?.item?.name}:
            {order.complete ?
                " " + order.quantity
                :
                <>
                    <input
                        type="number"
                        value={order.quantity}
                        min="1"
                        onChange={handleChange}
                    >
                    </input>
                    <button onClick={() => deleteOrder(order.id)}>❌</button>
                </>
            }   
            </h3>
        </div>
        :
        null
    )
}

export default Order