import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {FaTrash,FaTrashRestore} from 'react-icons/fa'
import { RemoveItem } from '../store/actions/cartActions'


const Cart = () => {

    const {products,total} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'ZAR',
    });

    const CartRemove =(id)=> {
        dispatch(RemoveItem(id))
    }


  return (
    <>
        <section className="py-10 px-14 bg-slate-300/50 flex gap-4">
            <h1 className="text-3xl font-play text-black/60 border-r border-black uppercase px-4">Cart</h1>
            <Link to='/' className="text-3xl font-play text-black/60 border-r border-black uppercase px-4">Home</Link>
        </section>


        <section className="py-24 px-2 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* left */}
            <div className="col-span-1 lg:col-span-2  self-start   w-full py-3">
            {/* card start*/}
            {products?.map((product,index) => (
            <div  key={index} className="grid grid-cols-4 border-b border-b-gray-400 my-8 md:px-8 pb-6">
                {/* left image */}
                <div className="col-span-1">
                <img src={product.image} alt={product.title} className="w-[90px] md:w-[120px] h-[90px] lg:h-[120px]" />
                </div>
                <div className="col-span-2 flex flex-col self-center">
                    <h3 className="text-[14px] md:text-md  text-gray-600 capitalize tracking-[2px]">{product.title}</h3>
                    
                </div>
                <div className="col-span-1 flex flex-col gap-8 items-center self-center">
                <span className="text-[13px] lg:text-xl text-gray-600">Price : {USDollar.format(product.price)}</span>

                    <button className="">
                        <FaTrashRestore onClick={() => CartRemove(product.id)}  className='text-red-500 text-[17px] md:text-md  lg:text-2xl' />
                    </button>
                </div>
            </div>

            ))}
            {/* card ending */}
            </div>

            {/* right */}
            <div className="col-span-1 w-full self-start  rounded-xl py-4 shadow-xl px-8">
            <div className="flex justify-between">
                <h3 className="text-slate-800 uppercase font-semibold text-xl">Subtotal</h3>

                <h3 className="text-slate-800 uppercase font-semibold text-xl">ZAR {USDollar.format(total)}</h3>
            </div>
                <div className="w-full bg-gray-400 h-[1px] my-4"></div>
                <p className="text-md font-rail leading-relaxed font-thin text-black">The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.</p>

                <button className="my-6 w-full py-4 hover:opacity-70 hover:translate-y-2 duration-700 shadow-xl shadow-violet-400 rounded-full bg-black text-white text-md font-rail">Checkout</button>
            </div>
        </div>
            
        </section>
    </>
  )
}

export default Cart;

{/* <table className="w-full">
                <thead>
                    <tr className='border-b border-black '>
                        <th className='py-4'>Product</th>
                        <th className='py-4'>Price</th>
                        <th className='py-4'>Quantity</th>
                        <th className='py-4'>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black ">
                            <td className='flex items-center gap-8 px-8 py-4'>
                            <button className="text-red-500 text-2xl">X</button>
                            <img src="/assets/0bb103e73b464b002fb82b7ae1cd67e5.jpg" alt="image" className="w-[100px] h-3rem" />
                                <span className="text-md  text-gray-600 uppercase tracking-">Blue Jeans</span>
                            </td>
                    </tr>
                </tbody>
            </table> */}