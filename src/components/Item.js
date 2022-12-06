const Item = ({item}) => {

    const handleClick = () => {
        console.log("OINK")
    }

    return (
        <div>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
            <img src={item.image} />
            <p>{item.description}</p>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default Item