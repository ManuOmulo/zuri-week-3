import { Routes, Route } from "react-router-dom"
import Home from './Routes/Home'
import Navbar from "./components/navbar"
import FooterComponent from "./components/footer"
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
