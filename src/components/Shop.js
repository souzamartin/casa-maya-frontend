import Item from './Item'

const Shop = ({items, onAdd}) => {
    return (
        items.map(item =>
            <Item key={item.id} item={item} onAdd={onAdd} />
        )
    )
}

export default Shop