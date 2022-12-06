const Item = ({item}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
            <img src={item.image} />
            <p>{item.description}</p>
        </div>
    )
}

export default Item