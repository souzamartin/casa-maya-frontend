import {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Shop from './components/Shop'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/items")
    .then(r => r.json())
    .then(setItems)
  }, [])

  return (
    <div className="App">
      <Header />
      <Shop items={items} />
    </div>
  );
}

export default App;
