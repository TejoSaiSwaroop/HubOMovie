import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Hubomovie from './pages/Hubomovie'
import Login from './pages/Login'
import Signup from './pages/Signup'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Hubomovie />} />
    </Routes>
    </BrowserRouter>

  )
}
