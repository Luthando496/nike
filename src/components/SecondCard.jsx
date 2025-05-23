import React from 'react'
import {Link} from 'react-router-dom'

const SecondCard = ({product}) => {
  return (
    <Link  to={`/product/${product.id}`} className="card w-full p-4 hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[286px]">
                    <img src={product?.image} alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">{product?.name}</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-700">R{product?.price}</span>
                    <span className="text-xl font-bold text-green-700">{product?.percent}% off</span>
                </div>
                </div>
    </Link>
  )
}

export default SecondCard