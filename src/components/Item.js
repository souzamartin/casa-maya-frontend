const Item = ({item, onAdd}) => {

    return (
        <div>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
            <img src={item.image} />
            <p>{item.description}</p>
            <button onClick={() => onAdd(item.id)}>Add to Cart</button>
        </div>
    )
}

export default Item