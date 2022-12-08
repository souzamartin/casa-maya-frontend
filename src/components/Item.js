const Item = ({item, onAdd}) => {

    return (
        <div className='item'>
            <h3>{item.name}</h3>
            <div calssName='itemimage'>
                <img src={item.image} />
            </div>
            <span>${item.price}</span>
            <p>{item.description}</p>
            <button onClick={() => onAdd(item.id)}>Add to Cart</button>
        </div>
    )
}

export default Item