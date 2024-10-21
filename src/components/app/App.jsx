import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Map from '../mapComponent/Map'
import MainPage from '../../page/MainPage/MainPage'
import NavBar from '../navBar/Nav'
import NotExistingPage from '../../page/NotExistingPage/NotExistingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path = "/" element = { <MainPage/> }/>
                <Route path = "/map" element = { <Map/> }/>

                <Route path = '*' element = { <NotExistingPage/> } /> 
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
