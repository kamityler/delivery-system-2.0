import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Map from '../mapComponent/Map'
import MainPage from '../../page/MainPage/MainPage'
import NavBar from '../navBar/Nav'
import NotExistingPage from '../../page/NotExistingPage/NotExistingPage'
import WelcomePage from '../../page/WelcomePage/WelcomePage'
import LoginForm from './../../page/WelcomePage/LoginForm';
import LinksToLogin from './../../page/WelcomePage/LinksToLogin';
import SignupForm from './../../page/WelcomePage/SignupForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path = '/' element = { <WelcomePage/> }/>
                <Route path = '/map' element = { <Map/> }/>
                <Route path = '/main' element = {<MainPage/>}/>

                <Route path = '/login' element = { <WelcomePage children = {<LoginForm/>}/>} />
                <Route path = '/signup' element = { <WelcomePage children = {<SignupForm/>}/>} />
                <Route path = '/welcome' element = { <WelcomePage children = {<LinksToLogin/>}/>} />


                <Route path = '*' element = { <NotExistingPage/> } /> 
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
