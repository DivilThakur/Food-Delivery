import Hero from "./Pages/Hero"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import MobileCart from "./Pages/Cart"
import { Routes, Route } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { AppContext } from "./context/AppContext"
import { Toaster } from "react-hot-toast"
import Login from "./Pages/Login"
import Checkout from "./Pages/Checkout"
import MobileMenu from "./Pages/MobileMenu"
import Orders from "./Pages/Orders"
import LoadingScreen from "./components/LoadingScreen"

const App = () => {
  const { cartOpen, showLogin, showMobileMenu } = useContext(AppContext);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-clip">
      {showLoading && <LoadingScreen />}
      <Toaster />
      <Navbar />
      {
        cartOpen && <MobileCart />
      }
      {
        showLogin && <Login />
      }
      {
        showMobileMenu && <MobileMenu />
      }
      <Routes >
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<>Error</>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App