import {useState} from "react"

const Order = ({order, items, changeQuantity, deleteOrder}) => {
    const [visible, setVisible] = useState(true)

    const filtered = items.filter(item => item.id === order.item_id)

    const handleChange = (e) => {
        changeQuantity(order.id, e.target.value)
        setVisible(!visible)
    }

    return(
        visible ?
        <div>
            <h3>{filtered[0].name}:
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