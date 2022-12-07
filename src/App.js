import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import PrevOrders from './components/PrevOrders'
import NewItem from './components/NewItem';

function App() {
  const [items, setItems] = useState([])
  const [orders, setOrders] = useState([])

  // Fetch items
  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(r => r.json())
    .then(setItems)
  }, [])

  // Create new item
  const createItem = (formData) => {
    fetch("http://localhost:9292/items", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newItem => setItems([...items, newItem]))
  }

  // Fetch orders
  useEffect(() => {
    fetch("http://localhost:9292/orders")
    .then(r => r.json())
    .then(setOrders)
  }, [])

  // Create new order
  const onAdd = (itemId) => {
    fetch("http://localhost:9292/orders", {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        item_id: itemId,
        quantity: 1,
        complete: false,
      })
    })
    .then(r => r.json())
    .then(newOrder => setOrders([...orders, newOrder]))
  }

  // Update order quantity
  const changeQuantity = (orderId, newQuantity) => {
    fetch(`http://localhost:9292/orders/${orderId}`, {
      method: "PATCH",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        quantity: newQuantity,
      })
    })
    .then(r => r.json())
    .then(newOrder => setOrders([...orders, newOrder]))
  }

  // Delete order
  const deleteOrder = (orderId) => {
    fetch(`http://localhost:9292/orders/${orderId}`, {method: "DELETE"})

      const updatedOrders = orders.filter(order => order.id !== orderId)
      setOrders(updatedOrders)
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop">
          <Shop items={items} onAdd={onAdd} />
        </Route>
        <Route path="/cart">
          <Cart
            items={items}
            orders={orders} 
            changeQuantity={changeQuantity}
            deleteOrder={deleteOrder}
          />
        </Route>
        <Route path="/prev_orders">
          <PrevOrders orders={orders} items={items}/>
        </Route>
        <Route path="/new_item">
          <NewItem createItem={createItem} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
