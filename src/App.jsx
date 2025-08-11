import { BrowserRouter, Routes, Route } from "react-router-dom"


import HomePage from "./Screens/Homepage"
import DetailedService from "./Screens/DetailedService"
import ServicesPage from "./Screens/ServicesPage"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/services/:id" element={<DetailedService />} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
