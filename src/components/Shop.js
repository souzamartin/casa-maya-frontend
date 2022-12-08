import Item from './Item'

const Shop = ({items, onAdd}) => {
    return (
        <div className='shop'>
            {items.map(item =>
                <Item key={item.id} item={item} onAdd={onAdd} />
            )}
        </div>
    )
}

export default Shop