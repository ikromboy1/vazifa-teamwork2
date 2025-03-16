import './App.css'
import { Routes, Route } from 'react-router-dom'
import Services from "./components/services"

function App() {
  return (
    <>
    <Routes>
      <Route path="/Services" element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App