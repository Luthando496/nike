import { useState,useEffect,lazy,Suspense } from 'react'
const Navbar = lazy(()=>import ('./components/Navbar'))
const Home = lazy(()=>import ('./pages/Home'))
const Product = lazy(()=>import ('./pages/Product'))
const Footer = lazy(()=>import ('./components/Footer'))
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/core/transition/transitionEmit'
import {Routes,Route} from 'react-router-dom'
const Cart = lazy(()=>import('./pages/Cart'))
import axios from 'axios'



function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState(null)
  const [cate, setCategory] = useState(null)
  // console.log(JSON.stringify(import.meta.env.VITE_REACT_APP_API_TOKEN).replace(/"/g, ''))

  const fetch = async() =>{
    try{

      const {data} = await axios.get(`${JSON.stringify(import.meta.env.VITE_REACT_API).replace(/"/g, '')}/categories?populate=*`,{
        headers:{
          Authorization:`bearer ${JSON.stringify(import.meta.env.VITE_REACT_APP_API_TOKEN).replace(/"/g, '')}`
        }
      })


      console.log(data?.data)
      setCategory(data?.data)
      
    }catch(error){
      console.log(error)
    }
  }

  const fetchProducts = async() =>{
    try{

      const {data} = await axios.get(`${JSON.stringify(import.meta.env.VITE_REACT_API).replace(/"/g, '')}/products?populate=*`,{
        headers:{
          Authorization:`bearer ${JSON.stringify(import.meta.env.VITE_REACT_APP_API_TOKEN).replace(/"/g, '')}`
        }
      })


      console.log(data?.data)
      setProducts(data?.data)
      
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetch()
    fetchProducts()
  },[])

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>

      <Navbar />
      <Routes >
        <Route path="/" element={<Home products={products && products}  data={cate && cate} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Suspense>
    </>
  )
}

export default App
