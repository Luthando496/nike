import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Footer from './components/Footer'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/core/transition/transitionEmit'
import {Routes,Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
