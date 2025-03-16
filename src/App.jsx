import './App.css'
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'/>
      <Route path='/service'/>
      <Route path='/projects'/>
      <Route path='/Services'/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
