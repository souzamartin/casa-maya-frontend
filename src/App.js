import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import PrevOrders from './components/PrevOrders'
import NewItem from './components/NewItem';

function App() {
  const history = useHistory()
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
    .then(history.push("/shop"))
  }

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

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop">
          <Shop items={items} onAdd={onAdd} />
        </Route>
        <Route path="/cart">
          <Cart orders={orders} setOrders={setOrders} />
        </Route>
        <Route path="/prev_orders">
          <PrevOrders />
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
