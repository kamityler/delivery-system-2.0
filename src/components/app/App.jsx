import { useState } from 'react'
import './App.css'
import Map from '../mapComponent/Map'
import NavBar from '../navBar/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>
        <Map/>
    </>
  )
}

export default App
