import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

// React tools
import { Route, Routes } from "react-router";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
import Login from './Pages/Login';
import Try from './Pages/Try'
import Tarot from './Pages/Tarot'
import Basket from './components/Basket';
import Planet from './Pages/Planet'


function App() {

  return (
    <>
      <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Try />} path="/try" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogDetail />} path="/blogdetail/:postId" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Login />} path="/login" />
          <Route element={<Tarot />} path="/tarot" />
          <Route element={<Basket />} path="/basket" />
          <Route element={<Planet />} path="/planet" />
          

        </Routes>
    </>
  )
}

export default App
