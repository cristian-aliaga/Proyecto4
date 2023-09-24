import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Contact } from "./pages/Contact"
import { Book } from "./pages/Book"
import { About } from "./pages/About"
import { Branches } from "./pages/branches"
import { Rules } from "./pages/Rules"
import { MainCarousel } from "./components/MainCarousel"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/branches" element={<Branches/>}></Route>
        <Route path="/rules" element={<Rules/>}></Route>
      </Routes>
    </>
  )
}

export default App
