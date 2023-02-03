import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
export default function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/*" element={<NotFound/>}/>
              <Route path="/n otFound" element={<NotFound/>}/>
            </Routes>
            </main>
          <Footer />
        </div>
      </Router>
    </div>
  )
}