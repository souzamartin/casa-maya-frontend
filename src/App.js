import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import PrevOrders from './components/PrevOrders'
import Customer from './components/Customer'

function App() {
  const [items, setItems] = useState([])
  const [activeCustomerId, setActiveCustomerId] = useState(null)
  const [activeCustomer, setActiveCustomer] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(r => r.json())
    .then(setItems)
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/customers/${activeCustomerId}`)
    .then(r => r.json())
    .then(setActiveCustomer)
  }, [activeCustomerId])

  return (
    <div className="App">
      <Header setActiveCustomerId={setActiveCustomerId} />
      <Switch>
        <Route path="/shop">
          <Shop items={items} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/prev_orders">
          <PrevOrders />
        </Route>
        <Route path="/account">
          <Customer customer={activeCustomer}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
