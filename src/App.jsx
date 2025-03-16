import './App.css'
import { Routes, Route } from 'react-router-dom'
import Project from './pages/Project'

function App() {
  return (
    <>
    <Routes>
      <Route path={"/project"} element={<Project/>}/>
    </Routes>
    </>
  )
}

export default App
