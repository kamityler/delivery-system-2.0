import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from '../mapComponent/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Map/>
    </>
  )
}

export default App
