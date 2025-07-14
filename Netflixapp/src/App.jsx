import React from 'react'
import Home from './Pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import NotFound from './Pages/NotFound/NotFound'
const App = () => {
  return (
    <>
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/player/:id'  element={<Player/>} />
          <Route path="*" element={<NotFound/>}/>
      </Routes>
        

    </div>
    
    
    </>
  )
}


export default App