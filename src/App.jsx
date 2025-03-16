import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/navbar';
import Home from './pages/Home';
import Project from './pages/Project'
import Footer from './pages/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={"/project"} element={<Project/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
