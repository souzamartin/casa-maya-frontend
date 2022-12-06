import Item from './Item'

const Shop = ({items}) => {
    return (
        items.map(item =>
            <Item key={item.id} item={item} />
        )
    )
}

export default Shop