import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Branches } from "./pages/branches"
import { Blog } from "./pages/Blog"
import { Footer } from "./components/Footer"
import { Book } from "./pages/Book"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/branches" element={<Branches/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
