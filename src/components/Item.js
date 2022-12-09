const Item = ({item, onAdd}) => {

    return (
        <div className='item'>
            <h3>{item.name}</h3>
            <div className='itemimagediv'>
                <img src={item.image} />
            </div>
            <h4>${item.price}</h4>
            <p>{item.description}</p>
            <button onClick={() => onAdd(item.id)}>Add to Cart</button>
        </div>
    )
}

export default Item