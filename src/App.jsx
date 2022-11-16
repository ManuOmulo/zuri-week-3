import { Routes, Route } from "react-router-dom"
import Home from './Routes/Home'
import Places from "./Routes/Places"
import Navbar from "./components/navbar"
import FooterComponent from "./components/footer"
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<Places />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
