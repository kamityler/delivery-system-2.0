import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Map from '../mapComponent/Map'
import NavBar from '../navBar/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path = "/" element = {<Map/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
