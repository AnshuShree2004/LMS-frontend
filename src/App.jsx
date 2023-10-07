
import './App.css'

import { Route, Routes } from 'react-router-dom'

import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import Signup from './pages/Signup'



function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<Aboutus />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    
  )
}

export default App
