const Order = ({order, items}) => {
    const filtered = items.filter(item => item.id === order.item_id)

    const changeQuantity = () => console.log("OINK")

    return(
        <div>
            <h3>{filtered[0].name}:
            {order.complete ?
                " " + order.quantity
            :
                <input type="number" value={order.quantity} onChange={changeQuantity}></input>
            }   
            </h3>
        </div> 
    )
}

export default Order