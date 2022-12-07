const Order = ({order, items}) => {
    const filtered = items.filter(item => item.id === order.item_id)
    console.log(filtered)
    return(
        <div>
            <h3>{filtered[0].name}: {order.quantity} bottles</h3>
        </div> 
    )
}

export default Order