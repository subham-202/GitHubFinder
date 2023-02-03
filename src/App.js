import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Footer from "../src/Components/layout/Footer"
import Navbar from "../src/Components/layout/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import {GithubProvider} from "./context/github/GithubContext"
export default function App() {
  return (
    <div>
      <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/*" element={<NotFound/>}/>
              <Route path="/notFound" element={<NotFound/>}/>
            </Routes>
            </main>
          <Footer />
        </div>
      </Router>
      </GithubProvider >
    </div>
  )
}