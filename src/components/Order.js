import {useState} from "react"

const Order = ({order, changeQuantity, deleteOrder}) => {
    const [visible, setVisible] = useState(true)

    const handleChange = (e) => {
        changeQuantity(order.id, e.target.value)
        setVisible(!visible)
    }

    return (
        visible ?
        <div className="orderdiv">
            <h3>Casa Maya {order?.item?.name}:</h3>
            {order.complete ?
                " " + order.quantity + "x bottles " + " = " + "$" + order.quantity*order.item.price
                :
                <div>
                    <input
                        type="number"
                        value={order.quantity}
                        min="1"
                        onChange={handleChange}>
                    </input>
                    <button onClick={() => deleteOrder(order.id)}>❌</button>
                    <span>${order.item.price}/bottle</span>
                </div>
            }   
            {/* </h3> */}
        </div>
        :
        null
    )
}

export default Order