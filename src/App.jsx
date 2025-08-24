import { BrowserRouter, Routes, Route } from "react-router-dom"


import HomePage from "./Screens/Homepage"
import DetailedService from "./Screens/DetailedService"
import ServicesPage from "./Screens/ServicesPage"
import ErrorPage from "./Screens/ErrorPage"
import ContactPage from "./Screens/ContactPage"
import About from "./Screens/AboutPage"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services/:id" element={<DetailedService />} />
        <Route path="*" element={<ErrorPage/>}/>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
