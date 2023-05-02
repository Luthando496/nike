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
import {collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'
import {useDispatch} from 'react-redux'
import {getProducts} from './store/actions/productActions.js'


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState(null)
  const dispatch = useDispatch()
  const [cate, setCategory] = useState(null)
  // console.log(JSON.stringify(import.meta.env.VITE_REACT_APP_API_TOKEN).replace(/"/g, ''))

 

 const fetchCategory =  async()=> {
  const citiesCol = collection(db, 'category');
  const citySnapshot = await getDocs(citiesCol);

   console.log(citySnapshot.docs.map(doc => doc.data()))
   setCategory(citySnapshot.docs.map(doc => doc.data()))

}

  useEffect(()=>{
    fetchCategory()
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>

      <Navbar />
      <Routes >
        <Route path="/" element={<Home cate={cate && cate}  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Suspense>
    </>
  )
}

export default App
