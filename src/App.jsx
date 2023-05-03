import { useState,useEffect,lazy,Suspense } from 'react'
const Navbar = lazy(()=>import ('./components/Navbar'))
const Home = lazy(()=>import ('./pages/Home'))
const Product = lazy(()=>import ('./pages/Product'))
const Footer = lazy(()=>import ('./components/Footer'))
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Vortex} from 'react-loader-spinner'
// import 'swiper/core/transition/transitionEmit'
import {Routes,Route} from 'react-router-dom'
const Cart = lazy(()=>import('./pages/Cart'))
const About = lazy(()=>import('./pages/About'))
const Category = lazy(()=>import('./pages/Category'))
import axios from 'axios'
import {collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'
import {useDispatch} from 'react-redux'
import {getProducts,getCategory} from './store/actions/productActions.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





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
  dispatch(getCategory(citySnapshot.docs.map(doc => doc.data())))
  //  setCategory()

}

  useEffect(()=>{
    fetchCategory()
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={2000} 
      />
    <Suspense fallback={<div className='w-full h-[60vh] flex justify-center items-center'><Vortex visible={true}
        height="400"
        width="400"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['black', 'pink', 'blue', 'yellow', 'orange', 'purple']}
        /></div>}>

      <Navbar />
      <Routes >
        <Route path="/" element={<Home   />} />
        <Route path="/about" element={<About   />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Suspense>
    </>
  )
}

export default App
